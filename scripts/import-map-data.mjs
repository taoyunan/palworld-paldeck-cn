import { writeFile } from "node:fs/promises";

const BASE_URL = "https://paldb.cc";
const MAP_PAGES = {
  main: `${BASE_URL}/cn/Map`,
  tree: `${BASE_URL}/cn/The_World_Tree`
};

function absoluteUrl(url) {
  if (!url) return "";
  return new URL(url, BASE_URL).href;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "user-agent": "Mozilla/5.0"
    }
  });
  if (!response.ok) throw new Error(`Fetch failed ${response.status}: ${url}`);
  return response.text();
}

function extractVar(source, name) {
  const pattern = new RegExp(`var\\s+${name}\\s*=\\s*([\\s\\S]*?);(?=var\\s+\\w+\\s*=|$)`);
  const match = source.match(pattern);
  if (!match) return null;
  return Function(`"use strict"; return (${match[1]});`)();
}

function extractOptionsEvaluator(html) {
  const match = html.match(/const perPixel\s*=\s*([\d.]+);[\s\S]*?const options\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return "";
  return `const perPixel = ${match[1]}; return ${match[2]};`;
}

function evaluateOptions(evaluator, config, fallback) {
  if (!evaluator) return fallback(config);
  return Function("config", evaluator)(config);
}

function defaultOptions(mapType) {
  return (config) => {
    if (mapType === "tree") {
      const perPixel = 1335.9375;
      return {
        imageMapDir: "image/treemap8/",
        transform_x_pixel: (config.landScapeRealPositionMax.X - config.landScapeRealPositionMin.X) / perPixel,
        ingame_x_start: -645,
        transform_y_pixel: (config.landScapeRealPositionMax.Y - config.landScapeRealPositionMin.Y) / perPixel,
        ingame_y_start: 128
      };
    }

    const perPixel = 459;
    return {
      imageMapDir: "image/map8/",
      transform_x_pixel: (config.landScapeRealPositionMax.X - config.landScapeRealPositionMin.X) / perPixel,
      ingame_x_start: 1000 + (-582888 - config.landScapeRealPositionMin.X) / perPixel,
      transform_y_pixel: (config.landScapeRealPositionMax.Y - config.landScapeRealPositionMin.Y) / perPixel,
      ingame_y_start: 1000 + (-301000 - config.landScapeRealPositionMin.Y) / perPixel
    };
  };
}

function compactPoint(point) {
  return {
    item: point.item || "",
    type: point.type || "Unknown",
    category: point.category || "",
    id: point.id || "",
    href: point.href || "",
    level: point.lv || "",
    comment: point.comment || "",
    cooldown: point.cooldown || "",
    onlyTime: point.onlyTime || "",
    weight: point.weight || "",
    icon: point.fixed_icon || "",
    ipos: point.ipos || null,
    pos: point.pos || null
  };
}

function buildPoints(data) {
  return [
    ...(data.fixedDungeon || []),
    ...(data.extras || []),
    ...(data.extrasIngame || []),
    ...(data.regionData || [])
  ].map(compactPoint).filter((point) => point.ipos || point.pos);
}

function compactIcons(iconLookup = {}) {
  return Object.fromEntries(Object.entries(iconLookup).map(([key, value]) => [key, {
    label: value.label || key,
    category: value.category || "Other",
    icon: value.fixed_icon || "",
    width: value.icon_width || 30,
    height: value.icon_height || 30
  }]));
}

async function buildMap(mapType, pageUrl) {
  const html = await fetchText(pageUrl);
  const dataPath = html.match(/<script[^>]+src="([^"]*(?:tree)?map_data_cn\.js[^"]*)"/i)?.[1] || "";
  const dataUrl = absoluteUrl(dataPath);
  const source = await fetchText(dataUrl);
  const config = extractVar(source, "config");
  const options = evaluateOptions(extractOptionsEvaluator(html), config, defaultOptions(mapType));
  const iconLookup = compactIcons(extractVar(source, "iconLookup"));
  const data = {
    fixedDungeon: extractVar(source, "fixedDungeon") || [],
    extras: extractVar(source, "extras") || [],
    extrasIngame: extractVar(source, "extrasIngame") || [],
    regionData: extractVar(source, "regionData") || []
  };

  return {
    id: mapType,
    label: mapType === "tree" ? "世界树" : "帕洛斯群岛",
    source: pageUrl,
    dataUrl,
    tileUrl: `https://cdn.paldb.cc/${String(options.imageMapDir || "").replace(/^\/+/, "").replace(/\/?$/, "/")}z{z}x{x}y{y}.webp`,
    config,
    options,
    icons: iconLookup,
    points: buildPoints(data)
  };
}

const maps = {
  main: await buildMap("main", MAP_PAGES.main),
  tree: await buildMap("tree", MAP_PAGES.tree)
};

const output = `export const MAP_DATABASE = ${JSON.stringify(maps, null, 2)};\n`;
await writeFile(new URL("../src/js/data/maps.js", import.meta.url), output, "utf8");

console.log(`Imported map data: main ${maps.main.points.length}, tree ${maps.tree.points.length}`);
