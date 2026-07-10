import { PALS } from "./data/pals.js";
import { PAL_BREEDING } from "./data/pal-breeding.js";
import { escapeHtml, imageTag } from "./pal-icons.js";

const parentASelect = document.querySelector("#parentA");
const parentBSelect = document.querySelector("#parentB");
const targetChildSelect = document.querySelector("#targetChild");
const parentComboSearch = document.querySelector("#parentComboSearch");
const singleParentSelect = document.querySelector("#singleParent");
const childResult = document.querySelector("#childResult");
const parentAPreview = document.querySelector("#parentAPreview");
const parentBPreview = document.querySelector("#parentBPreview");
const parentCombos = document.querySelector("#parentCombos");
const singleParentResults = document.querySelector("#singleParentResults");
const breedDataCount = document.querySelector("#breedDataCount");
const parentComboCount = document.querySelector("#parentComboCount");
const singleParentCount = document.querySelector("#singleParentCount");

const palById = new Map(PALS.map((pal) => [pal.id, pal]));
const pairToChild = new Map();
const childToPairs = new Map();
const parentToCombos = new Map();

function displayNo(pal) {
  return pal?.no || "联动";
}

function palSearchText(pal) {
  return `${pal.no || ""} ${pal.name || ""} ${pal.englishName || ""}`.toLowerCase();
}

function sortPals(left, right) {
  const leftNo = left.no || "9999";
  const rightNo = right.no || "9999";
  const noCompare = leftNo.localeCompare(rightNo, "zh-Hans-CN", { numeric: true });
  if (noCompare) return noCompare;
  return left.name.localeCompare(right.name, "zh-Hans-CN");
}

function pairKey(parentA, parentB) {
  return [parentA, parentB].sort((left, right) => left.localeCompare(right)).join("+");
}

function buildIndexes() {
  PAL_BREEDING.combos.forEach(([parentA, parentB, child]) => {
    const combo = { parentA, parentB, child };
    pairToChild.set(pairKey(parentA, parentB), child);

    if (!childToPairs.has(child)) childToPairs.set(child, []);
    childToPairs.get(child).push(combo);

    [parentA, parentB].forEach((parent) => {
      if (!parentToCombos.has(parent)) parentToCombos.set(parent, []);
      parentToCombos.get(parent).push(combo);
    });
  });
}

function fillSelect(select, selectedId = "") {
  const options = [...PALS].sort(sortPals).map((pal) => {
    const prefix = pal.no ? `${pal.no} ` : "";
    return `<option value="${escapeHtml(pal.id)}">${escapeHtml(prefix + pal.name)}</option>`;
  });
  select.innerHTML = options.join("");
  if (selectedId && palById.has(selectedId)) select.value = selectedId;
}

function palMini(palId, extraClass = "") {
  const pal = palById.get(palId);
  if (!pal) return "";

  return `
    <a class="breed-pal-mini ${extraClass}" href="./paldeck.html?pal=${encodeURIComponent(pal.id)}">
      ${imageTag(pal.image, pal.name)}
      <span>
        <strong>${escapeHtml(displayNo(pal))} ${escapeHtml(pal.name)}</strong>
      </span>
    </a>
  `;
}

function selectedPalPreview(palId) {
  const pal = palById.get(palId);
  if (!pal) return "";

  return `
    <a class="breed-preview-card" href="./paldeck.html?pal=${encodeURIComponent(pal.id)}">
      ${imageTag(pal.image, pal.name)}
      <span>
        <em>${escapeHtml(displayNo(pal))}</em>
        <strong>${escapeHtml(pal.name)}</strong>
      </span>
    </a>
  `;
}

function palResultCard(palId) {
  const pal = palById.get(palId);
  if (!pal) return `<p class="empty">没有找到子代数据。</p>`;

  return `
    <article class="breed-output-card">
      ${imageTag(pal.image, pal.name)}
      <div>
        <p class="eyebrow">子代</p>
        <h2>${escapeHtml(displayNo(pal))} ${escapeHtml(pal.name)}</h2>
        <p class="breed-result-note">当前亲代组合的配种结果</p>
        <a href="./paldeck.html?pal=${encodeURIComponent(pal.id)}">查看图鉴资料</a>
      </div>
    </article>
  `;
}

function comboMatchesQuery(combo, query) {
  if (!query) return true;
  return [combo.parentA, combo.parentB, combo.child]
    .map((id) => palById.get(id))
    .filter(Boolean)
    .some((pal) => palSearchText(pal).includes(query));
}

function comboRow(combo, mode = "parents") {
  const child = mode === "child" ? combo.child : null;
  return `
    <article class="breed-combo-row">
      ${palMini(combo.parentA)}
      <span class="breed-operator">+</span>
      ${palMini(combo.parentB)}
      <span class="breed-operator">=</span>
      ${palMini(child || combo.child, "child")}
    </article>
  `;
}

function renderChildResult() {
  const parentA = parentASelect.value;
  const parentB = parentBSelect.value;
  const child = pairToChild.get(pairKey(parentA, parentB));
  parentAPreview.innerHTML = selectedPalPreview(parentA);
  parentBPreview.innerHTML = selectedPalPreview(parentB);
  childResult.innerHTML = child ? palResultCard(child) : `<p class="empty">请选择两个亲代。</p>`;
}

function renderParentCombos() {
  const child = targetChildSelect.value;
  const query = parentComboSearch.value.trim().toLowerCase();
  const combos = (childToPairs.get(child) || []).filter((combo) => comboMatchesQuery(combo, query));

  parentComboCount.textContent = `${combos.length} 组`;
  parentCombos.innerHTML = combos.map((combo) => comboRow(combo)).join("")
    || `<p class="empty list-empty">没有匹配的父母组合。</p>`;
}

function renderSingleParentResults() {
  const parent = singleParentSelect.value;
  const combos = [...new Map((parentToCombos.get(parent) || []).map((combo) => {
    const otherParent = combo.parentA === parent ? combo.parentB : combo.parentA;
    return [`${otherParent}+${combo.child}`, { parentA: parent, parentB: otherParent, child: combo.child }];
  })).values()].sort((left, right) => {
    const childCompare = sortPals(palById.get(left.child), palById.get(right.child));
    if (childCompare) return childCompare;
    return sortPals(palById.get(left.parentB), palById.get(right.parentB));
  });

  singleParentCount.textContent = `${combos.length} 组`;
  singleParentResults.innerHTML = combos.map((combo) => comboRow(combo, "child")).join("")
    || `<p class="empty list-empty">没有可配结果。</p>`;
}

function applyInitialValues() {
  const params = new URLSearchParams(window.location.search);
  const first = params.get("parentA") || "lamball";
  const second = params.get("parentB") || "cattiva";
  const child = params.get("child") || "lamball";
  const single = params.get("single") || first;

  [parentASelect, parentBSelect, targetChildSelect, singleParentSelect].forEach((select) => fillSelect(select));
  parentASelect.value = palById.has(first) ? first : "lamball";
  parentBSelect.value = palById.has(second) ? second : "cattiva";
  targetChildSelect.value = palById.has(child) ? child : "lamball";
  singleParentSelect.value = palById.has(single) ? single : parentASelect.value;
}

function updateUrl() {
  const params = new URLSearchParams({
    parentA: parentASelect.value,
    parentB: parentBSelect.value,
    child: targetChildSelect.value,
    single: singleParentSelect.value
  });
  window.history.replaceState(null, "", `?${params}`);
}

function renderAll() {
  renderChildResult();
  renderParentCombos();
  renderSingleParentResults();
  updateUrl();
}

buildIndexes();
applyInitialValues();
breedDataCount.textContent = `${PAL_BREEDING.combos.length} 组本地数据`;

[parentASelect, parentBSelect].forEach((select) => {
  select.addEventListener("change", () => {
    renderChildResult();
    updateUrl();
  });
});

targetChildSelect.addEventListener("change", () => {
  renderParentCombos();
  updateUrl();
});
parentComboSearch.addEventListener("input", renderParentCombos);
singleParentSelect.addEventListener("change", () => {
  renderSingleParentResults();
  updateUrl();
});

renderAll();
