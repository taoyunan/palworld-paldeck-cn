import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { TECHNOLOGIES } from "../src/js/data/technologies.js";

const HOVER_URL = "https://paldb.cc/cn/hover";
const OUTPUT_PATH = resolve("src/js/data/technology-details.js");
const CONCURRENCY = 12;

function decodeHtml(value = "") {
  const named = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: '"' };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] === "#") {
      const hexadecimal = entity[1].toLowerCase() === "x";
      const number = Number.parseInt(entity.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      return Number.isFinite(number) ? String.fromCodePoint(number) : match;
    }
    return named[entity.toLowerCase()] ?? match;
  });
}

function plainText(html = "") {
  return decodeHtml(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getBodyContent(html) {
  return html.match(/<div class="card-body py-2">([\s\S]*?)<div class="recipes">/)?.[1]
    ?? html.match(/<div class="card-body py-2">([\s\S]*?)<\/div>\s*<div class="recipes">/)?.[1]
    ?? "";
}

function parseDescription(html) {
  const body = getBodyContent(html);
  return plainText(body.match(/^\s*<div>([\s\S]*?)<\/div>/)?.[1] ?? body);
}

function parseUnlocks(html) {
  const body = getBodyContent(html);
  const unlocks = [];
  const pattern = /<a class="itemname[^\"]*" data-hover="([^\"]+)"[^>]*>[\s\S]*?<img[^>]*src="([^\"]*)"[^>]*\/>([^<]+)<\/a>/g;

  for (const match of body.matchAll(pattern)) {
    if (!match[1].includes("MapObjects") && !match[1].includes("Items")) continue;
    unlocks.push({
      ref: decodeHtml(match[1]),
      image: decodeHtml(match[2]),
      name: plainText(match[3])
    });
  }
  return unlocks;
}

function parseMaterials(html) {
  const materials = [];
  const pattern = /<div class="d-flex justify-content-between p-2 align-items-center border-top">\s*<div><a[^>]*>[\s\S]*?<img[^>]*src="([^\"]*)"[^>]*\/>([^<]+)<\/a><\/div>\s*<div>([^<]+)<\/div>\s*<\/div>/g;

  for (const match of html.matchAll(pattern)) {
    materials.push({
      image: decodeHtml(match[1]),
      name: plainText(match[2]),
      amount: plainText(match[3])
    });
  }
  return materials;
}

function toHoverUrl(reference) {
  if (reference.startsWith("/")) return `https://paldb.cc${reference}`;
  const query = reference.startsWith("?") ? reference.slice(1) : reference;
  return `${HOVER_URL}?${query}`;
}

async function fetchText(url, attempt = 1) {
  const response = await fetch(url, {
    headers: { "user-agent": "palworld-paldeck-cn technology detail importer" }
  });
  if (response.ok) return response.text();
  if (attempt < 3) {
    await new Promise((resolveDelay) => setTimeout(resolveDelay, attempt * 450));
    return fetchText(url, attempt + 1);
  }
  throw new Error(`${response.status} ${url}`);
}

async function mapConcurrent(values, worker, label) {
  const results = new Array(values.length);
  let cursor = 0;
  let completed = 0;

  async function run() {
    while (cursor < values.length) {
      const index = cursor;
      cursor += 1;
      try {
        results[index] = await worker(values[index], index);
      } catch (error) {
        console.warn(`${label} failed:`, error.message);
        results[index] = null;
      }
      completed += 1;
      if (completed % 50 === 0 || completed === values.length) {
        console.log(`${label}: ${completed}/${values.length}`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, values.length) }, run));
  return results;
}

const technologyHovers = await mapConcurrent(
  TECHNOLOGIES,
  (technology) => fetchText(`${HOVER_URL}?s=Technology%2F${encodeURIComponent(technology.id)}`),
  "Technologies"
);

const baseDetails = TECHNOLOGIES.map((technology, index) => {
  const html = technologyHovers[index] ?? "";
  return {
    id: technology.id,
    description: parseDescription(html),
    unlocks: parseUnlocks(html)
  };
});

const references = [...new Set(baseDetails.flatMap((detail) => detail.unlocks.map((unlock) => unlock.ref)))];
const targetHovers = await mapConcurrent(references, (reference) => fetchText(toHoverUrl(reference)), "Recipes");
const targetDetails = new Map(references.map((reference, index) => [
  reference,
  {
    description: parseDescription(targetHovers[index] ?? ""),
    materials: parseMaterials(targetHovers[index] ?? "")
  }
]));

const details = Object.fromEntries(baseDetails.map((detail) => [
  detail.id,
  {
    description: detail.description,
    unlocks: detail.unlocks.map((unlock) => ({
      name: unlock.name,
      image: unlock.image,
      description: targetDetails.get(unlock.ref)?.description ?? "",
      materials: targetDetails.get(unlock.ref)?.materials ?? []
    }))
  }
]));

const output = `// Generated from ${HOVER_URL}. Run \`npm run fetch:technology-details\` to refresh.\n` +
  `export const TECHNOLOGY_DETAILS = ${JSON.stringify(details, null, 2)};\n`;

await writeFile(OUTPUT_PATH, output, "utf8");
console.log(`Wrote ${Object.keys(details).length} technology details to ${OUTPUT_PATH}`);
