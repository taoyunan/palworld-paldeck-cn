import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = "true"] = arg.replace(/^--/, "").split("=");
  return [key, value];
}));

const inputPath = resolve(args.get("input") || "../paldb-paldeck-tools/dist-20260710/pals.json");
const dataDir = new URL("../src/js/data/", import.meta.url);

function stablePal(pal) {
  const output = { ...pal };
  delete output.work;
  delete output.drops;
  delete output.skills;
  return output;
}

function asModule(name, value) {
  return `export const ${name} = ${JSON.stringify(value, null, 2)};\n`;
}

function palObjectSource(pal) {
  const json = JSON.stringify(stablePal(pal), null, 4);
  const body = json.replace(/\n/g, "\n  ").replace(/\n  }$/, "");
  return `${body},
    "work": PAL_WORK[${JSON.stringify(pal.id)}] || [],
    "drops": PAL_DROPS[${JSON.stringify(pal.id)}] || [],
    "skills": PAL_SKILLS[${JSON.stringify(pal.id)}] || []
  }`;
}

function palsModule(pals) {
  return `import { PAL_WORK } from "./pal-work.js";
import { PAL_DROPS } from "./pal-drops.js";
import { PAL_SKILLS } from "./pal-skills.js";

export const PALS = [
  ${pals.map(palObjectSource).join(",\n  ")}
];
`;
}

const pals = JSON.parse(await readFile(inputPath, "utf8"));
const work = Object.fromEntries(pals.map((pal) => [pal.id, pal.work || []]));
const drops = Object.fromEntries(pals.map((pal) => [pal.id, pal.drops || []]));
const skills = Object.fromEntries(pals.map((pal) => [pal.id, pal.skills || []]));

await Promise.all([
  writeFile(new URL("pal-work.js", dataDir), asModule("PAL_WORK", work), "utf8"),
  writeFile(new URL("pal-drops.js", dataDir), asModule("PAL_DROPS", drops), "utf8"),
  writeFile(new URL("pal-skills.js", dataDir), asModule("PAL_SKILLS", skills), "utf8"),
  writeFile(new URL("pals.js", dataDir), palsModule(pals), "utf8")
]);

console.log(`Imported ${pals.length} pals from ${inputPath}`);
