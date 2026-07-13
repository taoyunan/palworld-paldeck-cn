import { TECHNOLOGIES } from "./data/technologies.js";
import { TECHNOLOGY_DETAILS } from "./data/technology-details.js";

const levelGroups = new Map();
let tooltipTimer = null;
let activeNode = null;
let lastPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const elements = {
  tree: document.querySelector("#technologyTree"),
  empty: document.querySelector("#technologyEmpty"),
  search: document.querySelector("#technologySearch"),
  tooltip: document.querySelector("#technologyTooltip")
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createTechnologyNode(technology) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `technology-node${technology.ancient ? " ancient" : ""}`;
  button.dataset.id = technology.id;
  button.dataset.search = `${technology.name} ${technology.id}`.toLocaleLowerCase("zh-CN");
  button.setAttribute("aria-label", `${technology.name}，${technology.category}，${technology.ancient ? "古代科技点" : "科技点"} ${technology.cost}`);
  button.setAttribute("aria-describedby", "technologyTooltip");
  button.innerHTML = `
    <span class="node-type">${escapeHtml(technology.category)}</span>
    <img class="node-image" src="${escapeHtml(technology.image)}" alt="" loading="lazy" decoding="async">
    <strong class="node-name">${escapeHtml(technology.name)}</strong>
    <span class="node-cost" title="${technology.ancient ? "古代科技点" : "科技点"}">${technology.cost}</span>`;

  button.addEventListener("mouseenter", (event) => scheduleTooltip(button, technology, event.clientX, event.clientY));
  button.addEventListener("mousemove", (event) => {
    lastPointer = { x: event.clientX, y: event.clientY };
    if (!elements.tooltip.hidden && activeNode === button) positionTooltip(event.clientX, event.clientY);
  });
  button.addEventListener("mouseleave", () => hideTooltip(button));
  button.addEventListener("focus", () => {
    const rect = button.getBoundingClientRect();
    scheduleTooltip(button, technology, rect.right, rect.top + rect.height / 2, 0);
  });
  button.addEventListener("blur", () => hideTooltip(button));
  return button;
}

function renderTree() {
  const fragment = document.createDocumentFragment();

  for (let level = 1; level <= 80; level += 1) {
    const technologies = TECHNOLOGIES.filter((technology) => technology.level === level);
    const section = document.createElement("section");
    section.className = "technology-level";
    section.dataset.level = String(level);
    section.setAttribute("aria-labelledby", `technologyLevel${level}`);

    const levelCell = document.createElement("div");
    levelCell.className = "level-cell";
    levelCell.innerHTML = `<div class="level-marker" id="technologyLevel${level}"><strong>${level}</strong></div>`;

    const regularNodes = document.createElement("div");
    regularNodes.className = "technology-nodes regular-nodes";
    const ancientNodes = document.createElement("div");
    ancientNodes.className = "technology-nodes ancient-nodes";

    technologies.forEach((technology) => {
      const node = createTechnologyNode(technology);
      (technology.ancient ? ancientNodes : regularNodes).append(node);
    });

    section.append(levelCell, regularNodes, ancientNodes);
    levelGroups.set(level, { section, nodes: technologies });
    fragment.append(section);
  }

  elements.tree.append(fragment);
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

function renderTooltip(technology) {
  const details = TECHNOLOGY_DETAILS[technology.id] ?? { description: "", unlocks: [] };
  const unlocks = details.unlocks.length
    ? details.unlocks.map((unlock) => `
      <article class="tooltip-unlock">
        <img src="${escapeHtml(unlock.image)}" alt="" loading="lazy">
        <div class="tooltip-unlock-copy">
          <strong>${escapeHtml(unlock.name)}</strong>
          ${renderMaterials(unlock.materials)}
        </div>
      </article>`).join("")
    : '<div class="tooltip-unlock"><span class="no-materials">暂无解锁对象与材料数据</span></div>';

  elements.tooltip.classList.toggle("ancient", technology.ancient);
  elements.tooltip.innerHTML = `
    <header class="tooltip-titlebar">
      <img src="${escapeHtml(technology.image)}" alt="">
      <div>
        <h2>${escapeHtml(technology.name)}</h2>
        <p>${escapeHtml(technology.category)} · ${technology.ancient ? "古代科技" : "普通科技"}</p>
      </div>
      <div class="tooltip-level">
        <span>科技等级 <b>Lv.${technology.level}</b></span>
        <span>${technology.ancient ? "古代科技点" : "科技点"} <b>${technology.cost}</b></span>
      </div>
    </header>
    <div class="tooltip-body">
      <p class="tooltip-description">${escapeHtml(details.description || "暂无介绍")}</p>
      <h3 class="tooltip-section-title">解锁内容与所需材料</h3>
      <div class="tooltip-unlocks">${unlocks}</div>
    </div>`;
}

function scheduleTooltip(node, technology, x, y, delay = 120) {
  window.clearTimeout(tooltipTimer);
  activeNode = node;
  lastPointer = { x, y };
  tooltipTimer = window.setTimeout(() => {
    if (activeNode !== node) return;
    renderTooltip(technology);
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
  left = Math.max(margin, left);
  top = Math.max(margin, top);
  elements.tooltip.style.left = `${left}px`;
  elements.tooltip.style.top = `${top}px`;
}

function hideTooltip(node) {
  if (node && activeNode !== node) return;
  window.clearTimeout(tooltipTimer);
  activeNode = null;
  elements.tooltip.hidden = true;
}

function applySearch() {
  const query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  let visibleCount = 0;

  for (const group of levelGroups.values()) {
    let visibleInLevel = 0;
    group.section.querySelectorAll(".technology-node").forEach((node) => {
      const visible = !query || node.dataset.search.includes(query);
      node.hidden = !visible;
      if (visible) visibleInLevel += 1;
    });
    group.section.hidden = visibleInLevel === 0;
    visibleCount += visibleInLevel;
  }

  elements.tree.hidden = visibleCount === 0;
  elements.empty.hidden = visibleCount !== 0;
  hideTooltip();
}

renderTree();
elements.search.addEventListener("input", applySearch);
window.addEventListener("resize", () => {
  if (!elements.tooltip.hidden) positionTooltip(lastPointer.x, lastPointer.y);
});
