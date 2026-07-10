import { writeFile } from "node:fs/promises";
import { PALS } from "../src/js/data/pals.js";

const BASE_URL = "https://paldb.cc";
const BREED_URL = `${BASE_URL}/cn/Breed`;
const IV_URL = `${BASE_URL}/json/iv_cn.json?_=1771223538`;
const OUTPUT = new URL("../src/js/data/pal-breeding.js", import.meta.url);
const CONCURRENCY = 8;

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "palworld-paldeck-cn/1.0 data fetcher"
    }
  });
  if (!response.ok) {
    throw new Error(`Request failed ${response.status}: ${url}`);
  }
  return response.text();
}

async function fetchJson(url) {
  return JSON.parse(await fetchText(url));
}

function buildCodeMap(items) {
  const byName = new Map(PALS.map((pal) => [pal.name, pal]));
  const byEnglishName = new Map(PALS.map((pal) => [normalize(pal.englishName), pal]));
  const byNo = new Map(PALS.filter((pal) => pal.no).map((pal) => [pal.no.toUpperCase(), pal]));

  return items.map((item) => {
    const pal = byName.get(item.Name)
      || byEnglishName.get(normalize(item.NameEn))
      || byNo.get(String(item.Id || "").toUpperCase());

    if (!pal) {
      throw new Error(`Cannot map PalDB code ${item.Code} (${item.Name} / ${item.NameEn}) to local pal.`);
    }

    return {
      id: pal.id,
      code: item.Code,
      href: pal.href,
      ignoreCombi: Boolean(item.IgnoreCombi)
    };
  });
}

function extractComboBlocks(html) {
  return [...html.matchAll(/<div class="col">([\s\S]*?)<\/div>/g)].map((match) => match[1]);
}

function parseComboBlock(block) {
  const anchors = [...block.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>[\s\S]*?<img\b[^>]*src="([^"]+)"[^>]*\/>\s*([^<]+)<\/a>/g)]
    .map((match) => ({
      href: decodeHtml(match[1]).split("/").pop(),
      image: decodeHtml(match[2]),
      name: decodeHtml(match[3]).trim()
    }));

  if (anchors.length !== 3) return null;
  return {
    parentA: anchors[0],
    parentB: anchors[1],
    child: anchors[2]
  };
}

function sortedPair(a, b) {
  return [a, b].sort((left, right) => left.localeCompare(right));
}

async function runLimited(items, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, runWorker));
  return results;
}

async function main() {
  await fetchText(BREED_URL);
  const ivItems = await fetchJson(IV_URL);
  const breedingPals = buildCodeMap(ivItems);
  const hrefToId = new Map(PALS.map((pal) => [pal.href, pal.id]));
  const pairToChild = new Map();
  const unknown = new Set();

  await runLimited(breedingPals, async (pal, index) => {
    const url = `${BASE_URL}/cn/api/pal_breed_3?child3=${encodeURIComponent(pal.code)}`;
    const html = await fetchText(url);
    let added = 0;

    for (const block of extractComboBlocks(html)) {
      const combo = parseComboBlock(block);
      if (!combo) continue;

      const parentA = hrefToId.get(combo.parentA.href);
      const parentB = hrefToId.get(combo.parentB.href);
      const child = hrefToId.get(combo.child.href);

      if (!parentA || !parentB || !child) {
        [combo.parentA, combo.parentB, combo.child].forEach((entry) => {
          if (!hrefToId.has(entry.href)) unknown.add(`${entry.href} (${entry.name})`);
        });
        continue;
      }

      const [left, right] = sortedPair(parentA, parentB);
      pairToChild.set(`${left}+${right}`, child);
      added += 1;
    }

    console.log(`${String(index + 1).padStart(3, "0")}/${breedingPals.length} ${pal.code}: ${added}`);
  });

  if (unknown.size) {
    throw new Error(`Unknown pals in breeding response:\n${[...unknown].sort().join("\n")}`);
  }

  const combos = [...pairToChild.entries()]
    .map(([pair, child]) => {
      const [parentA, parentB] = pair.split("+");
      return [parentA, parentB, child];
    })
    .sort((left, right) => {
      const leftKey = `${left[2]} ${left[0]} ${left[1]}`;
      const rightKey = `${right[2]} ${right[0]} ${right[1]}`;
      return leftKey.localeCompare(rightKey);
    });

  const payload = {
    generatedAt: new Date().toISOString(),
    source: BREED_URL,
    pals: breedingPals,
    combos
  };

  const file = `export const PAL_BREEDING = ${JSON.stringify(payload, null, 2)};\n`;
  await writeFile(OUTPUT, file, "utf8");
  console.log(`Saved ${combos.length} breeding combinations to ${OUTPUT.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
