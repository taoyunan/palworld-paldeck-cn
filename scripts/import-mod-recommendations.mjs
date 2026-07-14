import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const API_URL = "https://mod.3dmgame.com/api/search/getModlist";
const SOURCE_URL = "https://mod.3dmgame.com/Palworld";
const GAME_ID = 333;
const PAGE_SIZE = 24;
const CUTOFF = "2026-07-10T16:00:00.000Z"; // 北京时间 2026-07-11 00:00
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = path.join(ROOT, "src", "js", "data", "mod-recommendations.js");

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchPage(page, timeRange) {
  let lastError;

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          origin: "https://mod.3dmgame.com",
          referer: SOURCE_URL,
          "user-agent": "Mozilla/5.0"
        },
        body: JSON.stringify({
          page,
          pageSize: PAGE_SIZE,
          original: 0,
          time: timeRange,
          order: 5,
          game_id: GAME_ID
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (!result.success || !result.data) throw new Error(result.msg || "接口返回失败");
      return result.data;
    } catch (error) {
      lastError = error;
      if (attempt < 4) await wait(attempt * 500);
    }
  }

  throw lastError;
}

async function collectMods(timeRange) {
  const first = await fetchPage(1, timeRange);
  const mods = [...(first.mods || [])];
  const totalPages = Math.min(50, Math.ceil((first.count || mods.length) / PAGE_SIZE));

  for (let page = 2; page <= totalPages; page += 1) {
    const data = await fetchPage(page, timeRange);
    mods.push(...(data.mods || []));
  }

  return mods;
}

async function loadMods() {
  let lastError;

  // 全部时间优先；接口偶发异常时退回近三个月、近七天。
  for (const timeRange of [0, 4, 2]) {
    try {
      const mods = await collectMods(timeRange);
      const gameDates = mods
        .filter((mod) => mod.game_id === GAME_ID)
        .map((mod) => Date.parse(mod.mods_createTime))
        .filter(Number.isFinite);

      // 降级时间范围必须越过截止日期，否则会生成一份看似成功但不完整的数据。
      const crossesCutoff = gameDates.some((date) => date < Date.parse(CUTOFF));
      if (timeRange !== 0 && !crossesCutoff) {
        throw new Error("降级查询范围没有覆盖到推荐截止日期");
      }

      return mods;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

function normalizeImage(url) {
  if (!url) return "";
  return url.startsWith("/") ? `https://mod.3dmgame.com${url}` : url;
}

function normalizeMod(mod) {
  return {
    id: mod.id,
    title: mod.mods_title || "未命名 MOD",
    description: mod.mods_desc || "暂无介绍",
    image: normalizeImage(mod.mods_image_url),
    category: mod.mods_type_name || "其他",
    original: Number(mod.mods_original || 0),
    createdAt: mod.mods_createTime,
    downloads: Number(mod.mods_download_cnt || 0),
    views: Number(mod.mods_click_cnt || 0),
    favorites: Number(mod.mods_mark_cnt || 0)
  };
}

const allMods = await loadMods();
const recommendations = [...new Map(
  allMods
    .filter((mod) => mod.game_id === GAME_ID)
    .filter((mod) => Date.parse(mod.mods_createTime) >= Date.parse(CUTOFF))
    .map((mod) => [mod.id, normalizeMod(mod)])
).values()].sort((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt));

if (!recommendations.length) {
  throw new Error("没有获取到 2026 年 7 月 10 日之后发布的幻兽帕鲁 MOD");
}

const meta = {
  sourceUrl: SOURCE_URL,
  sourceName: "3DM MOD站",
  cutoff: CUTOFF,
  updatedAt: new Date().toISOString(),
  count: recommendations.length
};

const output = `// 此文件由 scripts/import-mod-recommendations.mjs 自动生成，请勿手工编辑。\n`
  + `export const MOD_RECOMMENDATION_META = ${JSON.stringify(meta, null, 2)};\n\n`
  + `export const MOD_RECOMMENDATIONS = ${JSON.stringify(recommendations, null, 2)};\n`;

await mkdir(path.dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, output, "utf8");
console.log(`已写入 ${recommendations.length} 个 MOD：${path.relative(ROOT, OUTPUT)}`);
