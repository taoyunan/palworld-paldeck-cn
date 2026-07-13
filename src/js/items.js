import { ITEMS, ITEM_CATEGORIES } from "./data/items.js";

const RARITIES = [
  { id: "all", label: "全部", source: "" },
  { id: "common", label: "常见", source: "常见" },
  { id: "uncommon", label: "少见", source: "少见" },
  { id: "rare", label: "稀有", source: "稀有" },
  { id: "epic", label: "史诗", source: "史诗" },
  { id: "legendary", label: "传奇", source: "传奇" }
];

let activeCategory = "weapon";
let activeRarity = "all";
let activeCard = null;
let tooltipTimer = null;
let lastPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const elements = {
  categories: document.querySelector("#itemCategories"),
  rarityFilters: document.querySelector("#rarityFilters"),
  grid: document.querySelector("#itemGrid"),
  empty: document.querySelector("#itemEmpty"),
  search: document.querySelector("#itemSearch"),
  title: document.querySelector("#itemResultTitle"),
  count: document.querySelector("#itemResultCount"),
  total: document.querySelector("#itemTotal"),
  tooltip: document.querySelector("#itemTooltip")
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderCategories() {
  const categories = [{ id: "all", label: "全部物品", count: ITEMS.length }, ...ITEM_CATEGORIES];
  elements.categories.innerHTML = categories.map((category) => `
    <button class="item-category-button${category.id === activeCategory ? " active" : ""}"
      type="button" data-category="${escapeHtml(category.id)}">
      <span>${escapeHtml(category.label)}</span>
      <span>${category.count}</span>
    </button>`).join("");

  elements.categories.querySelectorAll(".item-category-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderItems();
    });
  });
}

function renderRarityFilters() {
  elements.rarityFilters.innerHTML = RARITIES.map((rarity) => `
    <button class="rarity-filter${rarity.id === activeRarity ? " active" : ""}"
      type="button" data-rarity="${rarity.id}" aria-pressed="${rarity.id === activeRarity}">
      ${rarity.label}
    </button>`).join("");

  elements.rarityFilters.querySelectorAll(".rarity-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeRarity = button.dataset.rarity;
      renderRarityFilters();
      renderItems();
    });
  });
}

function matchesFilters(item) {
  const query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  const rarity = RARITIES.find((entry) => entry.id === activeRarity);
  const categoryMatches = activeCategory === "all" || item.category === activeCategory;
  const rarityMatches = !rarity?.source || item.rarityLabel === rarity.source;
  const searchMatches = !query || `${item.name} ${item.id} ${item.description}`.toLocaleLowerCase("zh-CN").includes(query);
  return categoryMatches && rarityMatches && searchMatches;
}

function renderItems() {
  hideTooltip();
  const filtered = ITEMS.filter(matchesFilters);
  const category = activeCategory === "all"
    ? { label: "全部物品" }
    : ITEM_CATEGORIES.find((entry) => entry.id === activeCategory);
  const rarity = RARITIES.find((entry) => entry.id === activeRarity);

  elements.title.textContent = `${category?.label ?? "物品"}${activeRarity === "all" ? "" : ` · ${rarity.label}`}`;
  elements.count.textContent = `显示 ${filtered.length} 件`;
  elements.empty.hidden = filtered.length !== 0;
  elements.grid.hidden = filtered.length === 0;
  elements.grid.innerHTML = filtered.map((item, index) => `
    <button class="item-card" type="button" data-item-index="${ITEMS.indexOf(item)}"
      data-rarity="${item.rarity}" aria-label="${escapeHtml(`${item.name}，${item.rarityLabel}，${item.categoryLabel}`)}"
      aria-describedby="itemTooltip">
      <span class="item-card-rarity">${escapeHtml(item.rarityLabel)}</span>
      <img class="item-card-image" src="${escapeHtml(item.image)}" alt="" ${index > 20 ? 'loading="lazy"' : ""} decoding="async">
      <strong class="item-card-name" title="${escapeHtml(item.name)}">${escapeHtml(item.name)}</strong>
    </button>`).join("");

  elements.grid.querySelectorAll(".item-card").forEach((card) => {
    const item = ITEMS[Number(card.dataset.itemIndex)];
    card.addEventListener("mouseenter", (event) => scheduleTooltip(card, item, event.clientX, event.clientY));
    card.addEventListener("mousemove", (event) => {
      lastPointer = { x: event.clientX, y: event.clientY };
      if (!elements.tooltip.hidden && activeCard === card) positionTooltip(event.clientX, event.clientY);
    });
    card.addEventListener("mouseleave", () => hideTooltip(card));
    card.addEventListener("focus", () => {
      const rect = card.getBoundingClientRect();
      scheduleTooltip(card, item, rect.right, rect.top + rect.height / 2, 0);
    });
    card.addEventListener("blur", () => hideTooltip(card));
  });
}

function renderMaterials(materials) {
  if (!materials.length) return '<span class="no-materials">无材料需求或暂无材料数据</span>';
  return `<span class="material-list">${materials.map((material) => `
    <span class="material-chip">
      <img src="${escapeHtml(material.image)}" alt="" loading="lazy">
      <span>${escapeHtml(material.name)}</span>
      <b>×${escapeHtml(material.amount)}</b>
    </span>`).join("")}</span>`;
}

function renderTooltip(item) {
  const stats = item.stats.length
    ? `<div class="item-stats">${item.stats.map((stat) => `
        <span class="item-stat"><span>${escapeHtml(stat.label)}</span><b>${escapeHtml(stat.value)}</b></span>`).join("")}</div>`
    : "";

  elements.tooltip.dataset.rarity = String(item.rarity);
  elements.tooltip.innerHTML = `
    <header class="tooltip-titlebar">
      <img src="${escapeHtml(item.image)}" alt="">
      <div>
        <h2>${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(item.categoryLabel)} · ${escapeHtml(item.rarityLabel)}</p>
      </div>
      <div class="tooltip-level"><span>物品</span></div>
    </header>
    <div class="tooltip-body">
      ${stats}
      <p class="tooltip-description">${escapeHtml(item.description || "暂无介绍")}</p>
      <h3 class="tooltip-section-title">所需材料</h3>
      <div class="item-tooltip-materials">${renderMaterials(item.materials)}</div>
    </div>`;
}

function scheduleTooltip(card, item, x, y, delay = 100) {
  window.clearTimeout(tooltipTimer);
  activeCard = card;
  lastPointer = { x, y };
  tooltipTimer = window.setTimeout(() => {
    if (activeCard !== card) return;
    renderTooltip(item);
    elements.tooltip.hidden = false;
    positionTooltip(x, y);
  }, delay);
}

function positionTooltip(x, y) {
  const margin = 12;
  const gap = 18;
  const width = elements.tooltip.offsetWidth;
  const height = elements.tooltip.offsetHeight;
  let left = x + gap;
  let top = y + gap;

  if (left + width > window.innerWidth - margin) left = x - width - gap;
  if (top + height > window.innerHeight - margin) top = window.innerHeight - height - margin;
  elements.tooltip.style.left = `${Math.max(margin, left)}px`;
  elements.tooltip.style.top = `${Math.max(margin, top)}px`;
}

function hideTooltip(card) {
  if (card && activeCard !== card) return;
  window.clearTimeout(tooltipTimer);
  activeCard = null;
  elements.tooltip.hidden = true;
}

elements.total.textContent = ITEMS.length.toLocaleString("zh-CN");
renderCategories();
renderRarityFilters();
renderItems();
elements.search.addEventListener("input", renderItems);
window.addEventListener("resize", () => {
  if (!elements.tooltip.hidden) positionTooltip(lastPointer.x, lastPointer.y);
});
