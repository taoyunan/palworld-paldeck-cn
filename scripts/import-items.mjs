import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUTPUT_PATH = resolve("src/js/data/items.js");
const CATEGORY_DEFINITIONS = [
  { id: "weapon", label: "武器", path: "Weapon" },
  { id: "sphere", label: "帕鲁球", path: "Sphere" },
  { id: "sphere-module", label: "帕鲁球模块", path: "Sphere_Module" },
  { id: "armor", label: "防具", path: "Armor" },
  { id: "accessory", label: "饰品", path: "Accessory" },
  { id: "material", label: "素材", path: "Material" },
  { id: "consumable", label: "消耗品", path: "Consumable" },
  { id: "ammo", label: "弹药", path: "Ammo" },
  { id: "ingredient", label: "食材", path: "Ingredient" },
  { id: "key-item", label: "重要物品", path: "Key_Items" },
  { id: "glider", label: "滑翔伞", path: "Glider" },
  { id: "schematic", label: "设计图", path: "Schematic" }
];

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

function parseStats(html) {
  const stats = [];
  const pattern = /<span class="bg-dark bg-gradient p-1">([\s\S]*?)<\/span><span class="border p-1">([^<]*)<\/span>/g;
  for (const match of html.matchAll(pattern)) {
    const label = plainText(match[1]);
    const value = plainText(match[2]);
    if (label && value && !stats.some((stat) => stat.label === label)) stats.push({ label, value });
  }
  return stats;
}

function parsePage(html, category) {
  return html.split('<div class="col"><div class="card itemPopup">').slice(1).flatMap((card) => {
    const title = card.match(/<a class="itemname" data-hover="\?s=Items%2F([^\"]+)"[^>]*>([^<]+)<\/a>/);
    const image = card.match(/<div class="hover_icon_bg d-flex justify-content-between">[\s\S]*?<img[^>]*src="([^\"]*)"/);
    if (!title || !image) return [];

    const rarity = card.match(/hover_text_rarity(\d+)[^>]*>([^<]*)<\/span>/);
    const description = card.match(/<div class="card-body py-2">\s*<div>([\s\S]*?)<\/div>/);
    return [{
      id: decodeHtml(title[1]),
      name: plainText(title[2]),
      category: category.id,
      categoryLabel: category.label,
      rarity: Number(rarity?.[1] ?? 0),
      rarityLabel: plainText(rarity?.[2] ?? ""),
      image: decodeHtml(image[1]),
      description: plainText(description?.[1] ?? ""),
      stats: parseStats(card),
      materials: parseMaterials(card)
    }];
  });
}

async function fetchPage(category, attempt = 1) {
  const url = `https://paldb.cc/cn/${category.path}`;
  const response = await fetch(url, { headers: { "user-agent": "palworld-paldeck-cn item importer" } });
  if (response.ok) return { category, url, html: await response.text() };
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
const items = pages.flatMap(({ category, html }) => parsePage(html, category)).filter((item) => {
  if (seen.has(item.id)) return false;
  seen.add(item.id);
  return true;
});

if (items.length < 500) throw new Error(`Unexpected item data: ${items.length} entries`);

const categories = CATEGORY_DEFINITIONS.map((category) => ({
  ...category,
  count: items.filter((item) => item.category === category.id).length
}));

const output = `// Generated from PalDB inventory category pages. Run \`npm run import:items\` to refresh.\n` +
  `export const ITEM_CATEGORIES = ${JSON.stringify(categories, null, 2)};\n` +
  `export const ITEMS = ${JSON.stringify(items, null, 2)};\n`;

await writeFile(OUTPUT_PATH, output, "utf8");
console.log(`Wrote ${items.length} items to ${OUTPUT_PATH}`);
