import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const ROOT = new URL("..", import.meta.url);
const ROOT_PATH = ROOT.pathname.replace(/^\/([A-Za-z]:)/, "$1");
const ASSET_ROOT = join(ROOT_PATH, "assets", "paldb");
const CDN_ORIGIN = "https://cdn.paldb.cc";
const URL_PATTERN = /https:\/\/cdn\.paldb\.cc\/[^"'`\r\n)]+/g;
const TEXT_EXTENSIONS = new Set([".js", ".html", ".css", ".md", ".json"]);
const SKIP_DIRS = new Set([".git", "node_modules", "assets"]);
const TILE_MAX_ZOOM = 4;
const REQUEST_HEADERS = {
  accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  referer: "https://paldb.cc/cn/",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
};

function toPosixPath(value) {
  return value.split(sep).join("/");
}

function extensionOf(file) {
  const index = file.lastIndexOf(".");
  return index === -1 ? "" : file.slice(index).toLowerCase();
}

async function exists(file) {
  try {
    const info = await stat(file);
    return info.size > 0;
  } catch {
    return false;
  }
}

async function listTextFiles(dir, output = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const file = join(dir, entry.name);
    if (entry.isDirectory()) {
      await listTextFiles(file, output);
    } else if (TEXT_EXTENSIONS.has(extensionOf(entry.name))) {
      output.push(file);
    }
  }
  return output;
}

function localPathForUrl(url) {
  const parsed = new URL(url);
  return join(ASSET_ROOT, decodeURIComponent(parsed.pathname.replace(/^\/+/, "")));
}

function localRefForUrl(url) {
  const file = localPathForUrl(url);
  return `./${toPosixPath(relative(ROOT_PATH, file))}`;
}

function tileUrlsForTemplate(template) {
  const urls = [];
  for (let z = 0; z <= TILE_MAX_ZOOM; z += 1) {
    const count = 2 ** z;
    for (let x = 0; x < count; x += 1) {
      for (let y = 0; y < count; y += 1) {
        urls.push(template
          .replace("{z}", String(z))
          .replace("{x}", String(x))
          .replace("{y}", String(y)));
      }
    }
  }
  return urls;
}

async function collectUrls(files) {
  const urls = new Set();
  const replacements = new Map();

  for (const file of files) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(URL_PATTERN)) {
      const url = match[0];
      if (url.includes("${")) continue;
      if (url.includes("{z}") && url.includes("{x}") && url.includes("{y}")) {
        const localTemplate = localRefForUrl(url);
        replacements.set(url, localTemplate);
        tileUrlsForTemplate(url).forEach((tileUrl) => urls.add(tileUrl));
      } else {
        urls.add(url);
        replacements.set(url, localRefForUrl(url));
      }
    }
  }

  return { urls: [...urls], replacements };
}

async function download(url, index, total) {
  const target = localPathForUrl(url);
  if (await exists(target)) return { url, status: "cached" };

  await mkdir(dirname(target), { recursive: true });
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: REQUEST_HEADERS });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await pipeline(Readable.fromWeb(response.body), createWriteStream(target));
      if (index % 100 === 0 || index === total) {
        console.log(`[assets] ${index}/${total}`);
      }
      return { url, status: "downloaded" };
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 600));
    }
  }

  console.warn(`[assets] failed: ${url} (${lastError?.message || "unknown error"})`);
  return { url, status: "failed", error: lastError?.message || "unknown error" };
}

async function runPool(items, worker, concurrency = 16) {
  let index = 0;
  const results = [];
  const workers = Array.from({ length: concurrency }, async () => {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await worker(items[current], current + 1, items.length);
    }
  });
  await Promise.all(workers);
  return results;
}

async function rewriteFiles(files, replacements) {
  for (const file of files) {
    let text = await readFile(file, "utf8");
    const original = text;
    for (const [remote, local] of replacements) {
      text = text.split(remote).join(local);
    }
    text = text
      .replace(/\s*<a href="https:\/\/paldb\.cc\/cn\/[^"]+" target="_blank" rel="noopener">[^<]*<\/a>/g, "")
      .replace(/^\s*"(?:source|url|dataUrl)":\s*"https:\/\/paldb\.cc[^"]*",\r?\n/gm, "")
      .replace(/^\/\/ Generated from https:\/\/paldb\.cc\/cn\/Technologies\. Run `npm run import:technologies` to refresh\./m, "// Generated local technology data. Run `npm run import:technologies` to refresh.")
      .replace(/^\/\/ Generated from https:\/\/paldb\.cc\/cn\/hover\. Run `npm run fetch:technology-details` to refresh\./m, "// Generated local technology detail data. Run `npm run fetch:technology-details` to refresh.")
      .replace(/^\/\/ Generated from PalDB inventory category pages\. Run `npm run import:items` to refresh\./m, "// Generated local item data. Run `npm run import:items` to refresh.")
      .replace(/^\/\/ Generated from PalDB construction category pages\. Run `npm run import:constructions` to refresh\./m, "// Generated local construction data. Run `npm run import:constructions` to refresh.")
      .replace(/export const TECHNOLOGY_SOURCE = "https:\/\/paldb\.cc\/cn\/Technologies";/g, 'export const TECHNOLOGY_SOURCE = "";');
    if (text !== original) await writeFile(file, text, "utf8");
  }
}

const files = await listTextFiles(ROOT_PATH);
const { urls, replacements } = await collectUrls(files);
console.log(`[assets] ${urls.length} files to localize`);
const results = await runPool(urls, download, 18);
const failed = results.filter((item) => item.status === "failed");
if (failed.length) {
  throw new Error(`${failed.length} assets failed to download`);
}
await rewriteFiles(files, replacements);
console.log(`[assets] localized ${replacements.size} references`);
