import { CONSTRUCTIONS, CONSTRUCTION_CATEGORIES } from "./data/constructions.js";

let activeCategory = "production";
let activeCard = null;
let tooltipTimer = null;
let lastPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const constructionIndexes = new Map(CONSTRUCTIONS.map((construction, index) => [construction.id, index]));
const elements = {
  categories: document.querySelector("#constructionCategories"),
  grid: document.querySelector("#constructionGrid"),
  empty: document.querySelector("#constructionEmpty"),
  search: document.querySelector("#constructionSearch"),
  title: document.querySelector("#constructionResultTitle"),
  count: document.querySelector("#constructionResultCount"),
  total: document.querySelector("#constructionTotal"),
  tooltip: document.querySelector("#constructionTooltip")
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
  const categories = [{ id: "all", label: "全部建造", count: CONSTRUCTIONS.length }, ...CONSTRUCTION_CATEGORIES];
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
      renderConstructions();
    });
  });
}

function techLevel(construction) {
  return construction.stats.find((stat) => stat.label === "科技")?.value ?? "";
}

function matchesFilters(construction) {
  const query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  const categoryMatches = activeCategory === "all" || construction.category === activeCategory;
  const searchMatches = !query || `${construction.name} ${construction.id} ${construction.description}`.toLocaleLowerCase("zh-CN").includes(query);
  return categoryMatches && searchMatches;
}

function constructionCardMarkup(construction, position) {
  const level = techLevel(construction);
  return `
    <button class="construction-card" type="button" data-index="${constructionIndexes.get(construction.id)}"
      aria-label="${escapeHtml(`${construction.name}，${construction.categoryLabel}${level ? `，科技等级 ${level}` : ""}`)}"
      aria-describedby="constructionTooltip">
      <span class="construction-card-type">${escapeHtml(construction.categoryLabel)}</span>
      <img class="construction-card-image" src="${escapeHtml(construction.image)}" alt="" ${position > 20 ? 'loading="lazy"' : ""} decoding="async">
      <strong class="construction-card-name" title="${escapeHtml(construction.name)}">${escapeHtml(construction.name)}</strong>
      ${level ? `<span class="construction-card-level">Lv.${escapeHtml(level)}</span>` : ""}
    </button>`;
}

function renderConstructions() {
  hideTooltip();
  const filtered = CONSTRUCTIONS.filter(matchesFilters);
  const category = activeCategory === "all"
    ? { label: "全部建造" }
    : CONSTRUCTION_CATEGORIES.find((entry) => entry.id === activeCategory);

  elements.title.textContent = category?.label ?? "建造";
  elements.count.textContent = `显示 ${filtered.length} 项`;
  elements.empty.hidden = filtered.length !== 0;
  elements.grid.hidden = filtered.length === 0;
  const categoryOrder = new Map(CONSTRUCTION_CATEGORIES.map((entry, index) => [entry.id, index]));
  const sorted = [...filtered].sort((left, right) =>
    (categoryOrder.get(left.category) - categoryOrder.get(right.category)) ||
    (left.groupOrder - right.groupOrder) ||
    (constructionIndexes.get(left.id) - constructionIndexes.get(right.id)));
  const groups = new Map();
  sorted.forEach((construction) => {
    const key = `${construction.category}\u0000${construction.group}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(construction);
  });

  let cardPosition = 0;
  elements.grid.innerHTML = [...groups.values()].map((constructions) => {
    const first = constructions[0];
    const title = activeCategory === "all" ? `${first.categoryLabel} · ${first.group}` : first.group;
    const cards = constructions.map((construction) => constructionCardMarkup(construction, cardPosition++)).join("");
    return `
      <section class="construction-group" aria-labelledby="constructionGroup${constructionIndexes.get(first.id)}">
        <h3 class="construction-group-title" id="constructionGroup${constructionIndexes.get(first.id)}">${escapeHtml(title)} <small>/${constructions.length}</small></h3>
        <div class="construction-group-grid">${cards}</div>
      </section>`;
  }).join("");

  elements.grid.querySelectorAll(".construction-card").forEach((card) => {
    const construction = CONSTRUCTIONS[Number(card.dataset.index)];
    card.addEventListener("mouseenter", (event) => scheduleTooltip(card, construction, event.clientX, event.clientY));
    card.addEventListener("mousemove", (event) => {
      lastPointer = { x: event.clientX, y: event.clientY };
      if (!elements.tooltip.hidden && activeCard === card) positionTooltip(event.clientX, event.clientY);
    });
    card.addEventListener("mouseleave", () => hideTooltip(card));
    card.addEventListener("focus", () => {
      const rect = card.getBoundingClientRect();
      scheduleTooltip(card, construction, rect.right, rect.top + rect.height / 2, 0);
    });
    card.addEventListener("blur", () => hideTooltip(card));
  });
}

function renderMaterials(materials) {
  return `<span class="material-list">${materials.map((material) => `
    <span class="material-chip">
      <img src="${escapeHtml(material.image)}" alt="" loading="lazy">
      <span>${escapeHtml(material.name)}</span>
      <b>×${escapeHtml(material.amount)}</b>
    </span>`).join("")}</span>`;
}

function renderTooltip(construction) {
  const stats = construction.stats.length
    ? `<div class="item-stats">${construction.stats.map((stat) => `
        <span class="item-stat"><span>${escapeHtml(stat.label)}</span><b>${escapeHtml(stat.value)}</b></span>`).join("")}</div>`
    : "";
  const level = techLevel(construction);

  elements.tooltip.innerHTML = `
    <header class="tooltip-titlebar">
      <img src="${escapeHtml(construction.image)}" alt="">
      <div>
        <h2>${escapeHtml(construction.name)}</h2>
        <p>${escapeHtml(construction.categoryLabel)}</p>
      </div>
      <div class="tooltip-level">${level ? `<span>科技等级 <b>Lv.${escapeHtml(level)}</b></span>` : ""}</div>
    </header>
    <div class="tooltip-body">
      ${stats}
      <p class="tooltip-description">${escapeHtml(construction.description || "暂无介绍")}</p>
      <h3 class="tooltip-section-title">建造所需材料</h3>
      <div class="item-tooltip-materials">${renderMaterials(construction.materials)}</div>
    </div>`;
}

function scheduleTooltip(card, construction, x, y, delay = 100) {
  window.clearTimeout(tooltipTimer);
  activeCard = card;
  lastPointer = { x, y };
  tooltipTimer = window.setTimeout(() => {
    if (activeCard !== card) return;
    renderTooltip(construction);
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

elements.total.textContent = CONSTRUCTIONS.length.toLocaleString("zh-CN");
renderCategories();
renderConstructions();
elements.search.addEventListener("input", renderConstructions);
window.addEventListener("resize", () => {
  if (!elements.tooltip.hidden) positionTooltip(lastPointer.x, lastPointer.y);
});
