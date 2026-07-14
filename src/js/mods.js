import { MOD_RECOMMENDATIONS, MOD_RECOMMENDATION_META } from "./data/mod-recommendations.js";

const ORIGINAL_LABELS = new Map([
  [1, "原创"],
  [2, "二创"],
  [3, "翻译"],
  [4, "转载"]
]);

const state = {
  category: "全部",
  query: ""
};

const elements = {
  categories: document.querySelector("#modCategories"),
  count: document.querySelector("#modCount"),
  empty: document.querySelector("#modsEmpty"),
  grid: document.querySelector("#modsGrid"),
  search: document.querySelector("#modSearch"),
  source: document.querySelector("#modsSource"),
  updated: document.querySelector("#modsUpdated")
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("zh-CN");
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(value));
}

function getCategories() {
  const counts = new Map();
  MOD_RECOMMENDATIONS.forEach((mod) => counts.set(mod.category, (counts.get(mod.category) || 0) + 1));
  return [
    { name: "全部", count: MOD_RECOMMENDATIONS.length },
    ...[...counts.entries()]
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "zh-CN"))
      .map(([name, count]) => ({ name, count }))
  ];
}

function renderCategories() {
  elements.categories.innerHTML = getCategories().map((category) => `
    <button class="mod-category${state.category === category.name ? " active" : ""}"
      type="button" data-category="${escapeHtml(category.name)}" aria-pressed="${state.category === category.name}">
      <span>${escapeHtml(category.name)}</span><b>${category.count}</b>
    </button>`).join("");

  elements.categories.querySelectorAll(".mod-category").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderCategories();
      renderMods();
    });
  });
}

function matches(mod) {
  const categoryMatches = state.category === "全部" || mod.category === state.category;
  const haystack = `${mod.title} ${mod.description}`.toLocaleLowerCase("zh-CN");
  return categoryMatches && (!state.query || haystack.includes(state.query));
}

function renderMods() {
  const mods = MOD_RECOMMENDATIONS.filter(matches);
  elements.count.textContent = `显示 ${mods.length} / ${MOD_RECOMMENDATIONS.length} 个`;
  elements.empty.hidden = mods.length !== 0;
  elements.grid.hidden = mods.length === 0;
  elements.grid.innerHTML = mods.map((mod, index) => `
    <article class="mod-card">
      <a class="mod-card-media" href="https://mod.3dmgame.com/mod/${mod.id}" target="_blank" rel="noopener" aria-label="查看 ${escapeHtml(mod.title)}">
        ${mod.image ? `<img src="${escapeHtml(mod.image)}" alt="" ${index > 7 ? 'loading="lazy"' : ""} decoding="async" referrerpolicy="no-referrer">` : ""}
        <span class="mod-card-type">${escapeHtml(mod.category)}</span>
        <span class="mod-card-origin">${escapeHtml(ORIGINAL_LABELS.get(mod.original) || "MOD")}</span>
      </a>
      <div class="mod-card-body">
        <div class="mod-card-date">${formatDate(mod.createdAt)} · #${mod.id}</div>
        <h2><a href="https://mod.3dmgame.com/mod/${mod.id}" target="_blank" rel="noopener">${escapeHtml(mod.title)}</a></h2>
        <p>${escapeHtml(mod.description)}</p>
      </div>
      <footer class="mod-card-footer">
        <span title="浏览量">浏览 <b>${formatNumber(mod.views)}</b></span>
        <span title="下载量">下载 <b>${formatNumber(mod.downloads)}</b></span>
        <a href="https://mod.3dmgame.com/mod/${mod.id}" target="_blank" rel="noopener">查看 MOD <span aria-hidden="true">↗</span></a>
      </footer>
    </article>`).join("");
}

elements.source.href = MOD_RECOMMENDATION_META.sourceUrl;
elements.updated.textContent = `收录 ${MOD_RECOMMENDATION_META.count} 个 · 更新于 ${formatDate(MOD_RECOMMENDATION_META.updatedAt)}`;
elements.search.addEventListener("input", () => {
  state.query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  renderMods();
});

renderCategories();
renderMods();
