import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const SOURCE_URL = "https://paldb.cc/cn/Technologies";
const OUTPUT_PATH = resolve("src/js/data/technologies.js");

const response = await fetch(SOURCE_URL, {
  headers: {
    "user-agent": "palworld-paldeck-cn technology importer"
  }
});

if (!response.ok) {
  throw new Error(`Technology source request failed: ${response.status}`);
}

const html = await response.text();
const levelPattern = /<div class="d-flex justify-content-center align-items-center" style="width:32px;"><div>(\d+)<\/div><\/div>/g;
const itemPattern = /<div class="d-inline-block hoverTech\s*([^\"]*)" style="background-image: url\(([^)]+)\);" data-hover="\?s=Technology\/([^\"]+)">\s*<div class="hoverTechCost badge">(\d+)<\/div>\s*<div class="hoverTechHeader">([^<]+)<\/div>\s*<div class="hoverTechFooter">([^<]+)<\/div>/g;

function decodeHtml(value) {
  const entities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  };

  return value
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
      if (entity[0] === "#") {
        const hexadecimal = entity[1].toLowerCase() === "x";
        const number = Number.parseInt(entity.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
        return Number.isFinite(number) ? String.fromCodePoint(number) : match;
      }
      return entities[entity.toLowerCase()] ?? match;
    })
    .trim();
}

const levels = [...html.matchAll(levelPattern)].map((match) => ({
  index: match.index,
  level: Number(match[1])
}));
const technologies = [];
let levelIndex = 0;

for (const itemMatch of html.matchAll(itemPattern)) {
  while (levels[levelIndex + 1]?.index < itemMatch.index) {
    levelIndex += 1;
  }

  technologies.push({
    id: decodeHtml(itemMatch[3]),
    level: levels[levelIndex]?.level,
    name: decodeHtml(itemMatch[6]),
    category: decodeHtml(itemMatch[5]),
    cost: Number(itemMatch[4]),
    ancient: itemMatch[1].includes("BossTechnology"),
    image: decodeHtml(itemMatch[2])
  });
}

if (technologies.length < 500 || technologies.at(-1)?.level !== 80) {
  throw new Error(`Unexpected technology data: ${technologies.length} entries`);
}

const totals = technologies.reduce(
  (result, technology) => {
    result[technology.ancient ? "ancient" : "regular"] += technology.cost;
    return result;
  },
  { regular: 0, ancient: 0 }
);

const output = `// Generated from ${SOURCE_URL}. Run \`npm run import:technologies\` to refresh.\n` +
  `export const TECHNOLOGY_SOURCE = ${JSON.stringify(SOURCE_URL)};\n` +
  `export const TECHNOLOGY_TOTALS = ${JSON.stringify(totals)};\n` +
  `export const TECHNOLOGIES = ${JSON.stringify(technologies, null, 2)};\n`;

await writeFile(OUTPUT_PATH, output, "utf8");
console.log(`Wrote ${technologies.length} technologies to ${OUTPUT_PATH}`);
