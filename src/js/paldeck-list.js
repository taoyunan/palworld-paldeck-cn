import { PALS } from "./data/pals.js";
import { VERSION_1_NEW_IDS } from "./data/pal-version-tags.js";
import {
  elementBadge,
  elementClassName,
  escapeHtml,
  getElementIcon,
  getPalElements,
  getWorkIconMap,
  imageTag,
  workBadge
} from "./pal-icons.js";

const searchInput = document.querySelector("#listSearch");
const elementFilter = document.querySelector("#elementFilter");
const workFilter = document.querySelector("#workFilter");
const resetButton = document.querySelector("#resetFilters");
const rowList = document.querySelector("#palRows");
const listCount = document.querySelector("#listCount");

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function getCheckedValues(container) {
  return [...container.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
}

function renderMultiChoice(container, name, items) {
  container.innerHTML = items.map((item) => `
    <label class="choice-chip ${escapeHtml(item.className || "")}">
      <input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(item.value)}">
      <span class="chip-content">${item.icon ? imageTag(item.icon, item.value) : ""}<span class="chip-label">${escapeHtml(item.value)}</span></span>
    </label>
  `).join("");
}

function renderFilterOptions() {
  const elements = uniqueSorted(PALS.flatMap(getPalElements));
  const works = uniqueSorted(PALS.flatMap((pal) => (pal.work || []).map((item) => item.name)));
  const workIconMap = getWorkIconMap(PALS);

  renderMultiChoice(elementFilter, "element", elements.map((element) => ({
    value: element,
    icon: getElementIcon(element),
    className: `element-choice ${elementClassName(element)}`
  })));
  renderMultiChoice(workFilter, "work", works.map((work) => ({
    value: work,
    icon: workIconMap.get(work) || "",
    className: "work-choice"
  })));
}

function palMatchesFilters(pal) {
  const query = searchInput.value.trim().toLowerCase();
  const selectedElements = getCheckedValues(elementFilter);
  const selectedWorks = getCheckedValues(workFilter);

  const searchable = `${pal.no} ${pal.name} ${pal.englishName} ${pal.element}`.toLowerCase();
  if (query && !searchable.includes(query)) return false;

  const palElementList = getPalElements(pal);
  if (selectedElements.length && !selectedElements.every((element) => palElementList.includes(element))) {
    return false;
  }

  if (selectedWorks.length) {
    const workItems = pal.work || [];
    return selectedWorks.every((work) => workItems.some((item) => item.name === work));
  }

  return true;
}

function renderRows() {
  const matched = PALS.filter(palMatchesFilters);
  listCount.textContent = `${matched.length} / ${PALS.length}`;

  let hasRenderedCrossoverTitle = false;
  rowList.innerHTML = matched.map((pal) => {
    const shouldRenderCrossoverTitle = !pal.no && !hasRenderedCrossoverTitle;
    if (shouldRenderCrossoverTitle) hasRenderedCrossoverTitle = true;

    return `
    ${shouldRenderCrossoverTitle ? `<h3 class="pal-row-group-title">泰拉瑞亚联动</h3>` : ""}
    <article class="pal-row ${!pal.no ? "crossover-row" : ""}">
      <a class="pal-row-main" href="./paldeck.html?pal=${encodeURIComponent(pal.id)}">
        ${imageTag(pal.image, pal.name)}
        <span>
          <strong>${pal.no ? `${escapeHtml(pal.no)} ` : ""}${escapeHtml(pal.name)}</strong>
          ${VERSION_1_NEW_IDS.has(pal.id) ? `<em class="version-badge">1.0\u65b0\u589e</em>` : ""}
        </span>
      </a>
      <div class="row-tags">
        ${getPalElements(pal).map(elementBadge).join("")}
      </div>
      <div class="row-work">
        ${(pal.work || []).map(workBadge).join("") || `<small>无</small>`}
      </div>
    </article>
  `;
  }).join("") || `<p class="empty list-empty">没有匹配的帕鲁</p>`;
}

function setCheckedValues(container, values) {
  const valueSet = new Set(values.filter(Boolean));
  container.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = valueSet.has(input.value);
  });
}

function resetFilters() {
  searchInput.value = "";
  elementFilter.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });
  workFilter.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });
  renderRows();
}

function readMultiParam(params, key) {
  const repeated = params.getAll(key);
  const commaValues = params.get(key)?.split(",") || [];
  return uniqueSorted([...repeated, ...commaValues].map((value) => value.trim()).filter(Boolean));
}

function applyInitialFilters() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  if (query) searchInput.value = query;
  setCheckedValues(elementFilter, readMultiParam(params, "element"));
  setCheckedValues(workFilter, readMultiParam(params, "work"));
}

searchInput.addEventListener("input", renderRows);
[elementFilter, workFilter].forEach((container) => {
  container.addEventListener("change", renderRows);
});
resetButton.addEventListener("click", resetFilters);
document.addEventListener("wheel", (event) => {
  if (window.matchMedia("(max-width: 860px)").matches) return;
  if (!rowList.contains(event.target)) {
    event.preventDefault();
    rowList.scrollTop += event.deltaY;
  }
}, { capture: true, passive: false });

renderFilterOptions();
applyInitialFilters();
renderRows();
