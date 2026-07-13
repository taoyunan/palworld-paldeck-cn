import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUTPUT_PATH = resolve("src/js/data/constructions.js");
const CATEGORY_DEFINITIONS = [
  { id: "production", label: "生产", path: "Production" },
  { id: "pal", label: "帕鲁", path: "Pal" },
  { id: "storage", label: "收纳", path: "Storage" },
  { id: "food", label: "食物", path: "Food" },
  { id: "infrastructure", label: "基础设施", path: "Infrastructure" },
  { id: "lighting", label: "照明", path: "Lighting" },
  { id: "foundations", label: "建筑", path: "Foundations" },
  { id: "defenses", label: "防御", path: "Defenses" },
  { id: "furniture", label: "家具", path: "Furniture" },
  { id: "other", label: "其他", path: "Other" }
];

const WORK_LABELS = {
  Kindling: "生火",
  Watering: "浇水",
  Planting: "播种",
  Generating_Electricity: "发电",
  Handiwork: "手工作业",
  Gathering: "采集",
  Lumbering: "伐木",
  Mining: "采矿",
  Medicine_Production: "制药",
  Cooling: "冷却",
  Transporting: "搬运",
  Farming: "牧场"
};

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

function statLabel(labelHtml) {
  const text = plainText(labelHtml);
  if (text) return text;
  const link = labelHtml.match(/href="([^\"]+)"/i)?.[1]?.split("/").pop();
  return WORK_LABELS[link] ?? "工作适应性";
}

function parseStats(html) {
  const stats = [];
  const pattern = /<span class="bg-dark bg-gradient p-1">([\s\S]*?)<\/span><span class="border p-1">([^<]*)<\/span>/g;
  for (const match of html.matchAll(pattern)) {
    const label = statLabel(match[1]);
    const value = plainText(match[2]);
    if (label && value && !stats.some((stat) => stat.label === label)) stats.push({ label, value });
  }
  return stats;
}

function parseFunctionGroups(html) {
  const groups = new Map();
  const pattern = /<div class="productUiDisplayTitle[^\"]*">([^<]+)<\/div><div class="contentUiDisplay[^\"]*">([\s\S]*?)<\/div>/g;
  let order = 0;
  for (const match of html.matchAll(pattern)) {
    const groupName = plainText(match[1]);
    const objectPattern = /data-hover="\?s=MapObjects%2F([^\"]+)"/g;
    for (const objectMatch of match[2].matchAll(objectPattern)) {
      groups.set(decodeHtml(objectMatch[1]), { name: groupName, order });
    }
    order += 1;
  }
  return groups;
}

function parsePage(html, category) {
  const functionGroups = parseFunctionGroups(html);
  return html.split('<div class="col"><div class="card itemPopup">').slice(1).flatMap((card) => {
    const title = card.match(/<a class="itemname" data-hover="\?s=MapObjects%2F([^\"]+)"[^>]*>([^<]+)<\/a>/);
    const image = card.match(/<div class="hover_icon_bg d-flex justify-content-between">[\s\S]*?<img[^>]*src="([^\"]*)"/);
    if (!title || !image) return [];

    const description = card.match(/<div class="card-body py-2">\s*<div>([\s\S]*?)<\/div>/);
    const functionGroup = functionGroups.get(decodeHtml(title[1]));
    return [{
      id: decodeHtml(title[1]),
      name: plainText(title[2]),
      category: category.id,
      categoryLabel: category.label,
      group: functionGroup?.name ?? category.label,
      groupOrder: functionGroup?.order ?? 999,
      image: decodeHtml(image[1]),
      description: plainText(description?.[1] ?? ""),
      stats: parseStats(card),
      materials: parseMaterials(card)
    }];
  });
}

async function fetchPage(category, attempt = 1) {
  const url = `https://paldb.cc/cn/${category.path}`;
  const response = await fetch(url, { headers: { "user-agent": "palworld-paldeck-cn construction importer" } });
  if (response.ok) return { category, html: await response.text() };
  if (attempt < 3) {
    await new Promise((resolveDelay) => setTimeout(resolveDelay, attempt * 600));
    return fetchPage(category, attempt + 1);
  }
  throw new Error(`${response.status} ${url}`);
}

const pages = [];
for (const category of CATEGORY_DEFINITIONS) {
  const page = await fetchPage(category);
  pages.push(page);
  console.log(`Fetched ${category.label}`);
}

const seen = new Set();
const constructions = pages.flatMap(({ category, html }) => parsePage(html, category)).filter((construction) => {
  if (seen.has(construction.id)) return false;
  seen.add(construction.id);
  return true;
});

if (constructions.length < 200) throw new Error(`Unexpected construction data: ${constructions.length} entries`);

const categories = CATEGORY_DEFINITIONS.map((category) => ({
  ...category,
  count: constructions.filter((construction) => construction.category === category.id).length
}));

const output = `// Generated from PalDB construction category pages. Run \`npm run import:constructions\` to refresh.\n` +
  `export const CONSTRUCTION_CATEGORIES = ${JSON.stringify(categories, null, 2)};\n` +
  `export const CONSTRUCTIONS = ${JSON.stringify(constructions, null, 2)};\n`;

await writeFile(OUTPUT_PATH, output, "utf8");
console.log(`Wrote ${constructions.length} constructions to ${OUTPUT_PATH}`);
