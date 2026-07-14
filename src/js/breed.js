import { PALS } from "./data/pals.js";
import { PAL_BREEDING } from "./data/pal-breeding.js";
import { escapeHtml, imageTag } from "./pal-icons.js";

const parentASelect = document.querySelector("#parentA");
const parentBSelect = document.querySelector("#parentB");
const targetChildSelect = document.querySelector("#targetChild");
const parentComboSearch = document.querySelector("#parentComboSearch");
const singleParentSelect = document.querySelector("#singleParent");
const ownedPalSearch = document.querySelector("#ownedPalSearch");
const childResult = document.querySelector("#childResult");
const parentCombos = document.querySelector("#parentCombos");
const singleParentResults = document.querySelector("#singleParentResults");
const ownedPalList = document.querySelector("#ownedPalList");
const ownedPalCount = document.querySelector("#ownedPalCount");
const breedRouteResult = document.querySelector("#breedRouteResult");
const breedDataCount = document.querySelector("#breedDataCount");
const parentComboCount = document.querySelector("#parentComboCount");
const singleParentCount = document.querySelector("#singleParentCount");
const breedRouteCount = document.querySelector("#breedRouteCount");
const useCurrentParentsButton = document.querySelector("#useCurrentParents");
const clearOwnedPalsButton = document.querySelector("#clearOwnedPals");

const palById = new Map(PALS.map((pal) => [pal.id, pal]));
const pairToChild = new Map();
const childToPairs = new Map();
const parentToCombos = new Map();
const ownedPalIds = new Set();
const palSelectWidgets = new Map();

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

function planScore(plan) {
  if (!plan) return [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
  return [plan.missing.size, plan.round, plan.breedCount];
}

function isBetterPlan(candidate, current) {
  const candidateScore = planScore(candidate);
  const currentScore = planScore(current);
  for (let index = 0; index < candidateScore.length; index += 1) {
    if (candidateScore[index] !== currentScore[index]) {
      return candidateScore[index] < currentScore[index];
    }
  }
  return false;
}

function mergeMissing(left, right) {
  return new Set([...left, ...right]);
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

function initialPlanIndex(ownedSet, { allowMissingSeeds = false, forbiddenSeeds = new Set() } = {}) {
  const plans = new Map();
  ownedSet.forEach((id) => {
    if (palById.has(id)) {
      plans.set(id, {
        id,
        round: 0,
        missing: new Set(),
        breedCount: 0,
        recipe: null,
        seedMissing: false
      });
    }
  });

  if (allowMissingSeeds) {
    PALS.forEach((pal) => {
      if (!plans.has(pal.id) && !forbiddenSeeds.has(pal.id)) {
        plans.set(pal.id, {
          id: pal.id,
          round: 0,
          missing: new Set([pal.id]),
          breedCount: 0,
          recipe: null,
          seedMissing: true
        });
      }
    });
  }

  return plans;
}

function buildPlanIndex(ownedSet, options = {}) {
  const plans = initialPlanIndex(ownedSet, options);
  let changed = true;
  let guard = 0;

  while (changed && guard < PALS.length + 8) {
    changed = false;
    guard += 1;

    for (const [parentA, parentB, child] of PAL_BREEDING.combos) {
      const left = plans.get(parentA);
      const right = plans.get(parentB);
      if (!left || !right) continue;

      const candidate = {
        id: child,
        round: Math.max(left.round, right.round) + 1,
        missing: mergeMissing(left.missing, right.missing),
        breedCount: left.breedCount + right.breedCount + 1,
        recipe: { parentA, parentB, child, left, right },
        seedMissing: false
      };

      if (isBetterPlan(candidate, plans.get(child))) {
        plans.set(child, candidate);
        changed = true;
      }
    }
  }

  return plans;
}

function findBestPlan(targetId, ownedSet, options = {}) {
  return buildPlanIndex(ownedSet, options).get(targetId) || null;
}

function combineParentPlans(targetId, parentAPlan, parentBPlan) {
  if (!parentAPlan || !parentBPlan) return null;
  const combo = {
    parentA: parentAPlan.id,
    parentB: parentBPlan.id,
    child: targetId,
    left: parentAPlan,
    right: parentBPlan
  };
  return {
    id: targetId,
    round: Math.max(parentAPlan.round, parentBPlan.round) + 1,
    missing: mergeMissing(parentAPlan.missing, parentBPlan.missing),
    breedCount: parentAPlan.breedCount + parentBPlan.breedCount + 1,
    recipe: combo,
    seedMissing: false
  };
}

function recommendedPlans(targetId, ownedSet, limit = 5) {
  const combos = childToPairs.get(targetId) || [];
  const candidates = [];
  const seen = new Set();
  const assistedPlans = buildPlanIndex(ownedSet, {
    allowMissingSeeds: true,
    forbiddenSeeds: new Set([targetId])
  });

  combos.forEach((combo) => {
    if (!ownedSet.has(targetId) && (combo.parentA === targetId || combo.parentB === targetId)) return;
    const left = assistedPlans.get(combo.parentA);
    const right = assistedPlans.get(combo.parentB);
    const plan = combineParentPlans(targetId, left, right);
    if (!plan || plan.missing.size === 0) return;

    const key = [...plan.missing].sort().join("|") + `:${combo.parentA}+${combo.parentB}`;
    if (seen.has(key)) return;
    seen.add(key);
    candidates.push(plan);
  });

  return candidates
    .sort((left, right) => {
      const leftScore = planScore(left);
      const rightScore = planScore(right);
      for (let index = 0; index < leftScore.length; index += 1) {
        if (leftScore[index] !== rightScore[index]) return leftScore[index] - rightScore[index];
      }
      return String(left.recipe.parentA).localeCompare(String(right.recipe.parentA));
    })
    .slice(0, limit);
}

function fillSelect(select, selectedId = "") {
  const options = [...PALS].sort(sortPals).map((pal) => {
    const prefix = pal.no ? `${pal.no} ` : "";
    return `<option value="${escapeHtml(pal.id)}">${escapeHtml(prefix + pal.name)}</option>`;
  });
  select.innerHTML = options.join("");
  if (selectedId && palById.has(selectedId)) select.value = selectedId;
}

function palSelectLabel(palId) {
  const pal = palById.get(palId);
  if (!pal) return "";
  return `
    ${imageTag(pal.image, pal.name)}
    <span>
      <strong>${escapeHtml(pal.name)}</strong>
      <em>${escapeHtml(displayNo(pal))}</em>
    </span>
  `;
}

function updatePalSelectWidget(select) {
  const widget = palSelectWidgets.get(select);
  if (!widget) return;
  widget.trigger.innerHTML = `${palSelectLabel(select.value)}<i aria-hidden="true"></i>`;
  widget.menu.querySelectorAll("[data-value]").forEach((button) => {
    button.classList.toggle("active", button.dataset.value === select.value);
  });
}

function closePalSelects(except = null) {
  palSelectWidgets.forEach((widget) => {
    if (widget.root !== except) widget.root.classList.remove("open");
  });
}

function enhancePalSelect(select) {
  if (palSelectWidgets.has(select)) {
    updatePalSelectWidget(select);
    return;
  }

  const root = document.createElement("div");
  root.className = "pal-select";
  root.dataset.for = select.id;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "pal-select-trigger";
  trigger.setAttribute("aria-haspopup", "listbox");

  const menu = document.createElement("div");
  menu.className = "pal-select-menu";
  menu.setAttribute("role", "listbox");

  menu.innerHTML = [...PALS].sort(sortPals).map((pal) => `
    <button type="button" role="option" data-value="${escapeHtml(pal.id)}">
      ${palSelectLabel(pal.id)}
    </button>
  `).join("");

  root.append(trigger, menu);
  select.classList.add("pal-select-native");
  select.insertAdjacentElement("afterend", root);

  trigger.addEventListener("click", () => {
    const willOpen = !root.classList.contains("open");
    closePalSelects(root);
    root.classList.toggle("open", willOpen);
  });

  menu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-value]");
    if (!option) return;
    select.value = option.dataset.value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    root.classList.remove("open");
    updatePalSelectWidget(select);
  });

  select.addEventListener("change", () => updatePalSelectWidget(select));
  palSelectWidgets.set(select, { root, trigger, menu });
  updatePalSelectWidget(select);
}

function enhancePalSelects() {
  [parentASelect, parentBSelect, targetChildSelect, singleParentSelect].forEach((select) => enhancePalSelect(select));
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

function ownedPalOption(pal) {
  const checked = ownedPalIds.has(pal.id) ? " checked" : "";
  return `
    <label class="breed-owned-option">
      <input type="checkbox" value="${escapeHtml(pal.id)}"${checked}>
      ${imageTag(pal.image, pal.name)}
      <span>
        <strong>${escapeHtml(pal.name)}</strong>
        <em>${escapeHtml(displayNo(pal))}</em>
      </span>
    </label>
  `;
}

function collectPlanSteps(plan, steps = [], seen = new Set()) {
  if (!plan?.recipe) return steps;
  collectPlanSteps(plan.recipe.left, steps, seen);
  collectPlanSteps(plan.recipe.right, steps, seen);
  const key = `${plan.id}:${plan.recipe.parentA}+${plan.recipe.parentB}:${plan.round}`;
  if (!seen.has(key)) {
    seen.add(key);
    steps.push({
      round: plan.round,
      parentA: plan.recipe.parentA,
      parentB: plan.recipe.parentB,
      child: plan.id
    });
  }
  return steps;
}

function missingPalsHtml(plan) {
  const missing = [...plan.missing].sort((left, right) => sortPals(palById.get(left), palById.get(right)));
  if (!missing.length) return "";
  return `
    <div class="breed-route-missing">
      <span>建议补充</span>
      <div>${missing.map((id) => palMini(id)).join("")}</div>
    </div>
  `;
}

function routeStepsHtml(plan) {
  const steps = collectPlanSteps(plan)
    .sort((left, right) => left.round - right.round || sortPals(palById.get(left.child), palById.get(right.child)));

  if (!steps.length) {
    return `<p class="empty list-empty">目标已经在已有帕鲁里，不需要配种。</p>`;
  }

  return `
    <div class="breed-route-steps">
      ${steps.map((step) => `
        <article class="breed-route-step">
          <span class="breed-route-round">第 ${step.round} 轮</span>
          <div class="breed-combo-row">
            ${palMini(step.parentA)}
            <span class="breed-operator">+</span>
            ${palMini(step.parentB)}
            <span class="breed-operator">=</span>
            ${palMini(step.child, "child")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function routePlanCard(plan, title) {
  return `
    <article class="breed-route-card">
      <div class="breed-route-card-head">
        <div>
          <p class="eyebrow">${escapeHtml(title)}</p>
          <h3>${escapeHtml(displayNo(palById.get(plan.id)))} ${escapeHtml(palById.get(plan.id)?.name || plan.id)}</h3>
        </div>
        <span>最少 ${plan.round} 轮</span>
      </div>
      ${missingPalsHtml(plan)}
      ${routeStepsHtml(plan)}
    </article>
  `;
}

function renderChildResult() {
  const parentA = parentASelect.value;
  const parentB = parentBSelect.value;
  const child = pairToChild.get(pairKey(parentA, parentB));
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

function renderOwnedPalList() {
  const query = ownedPalSearch.value.trim().toLowerCase();
  const pals = [...PALS]
    .sort(sortPals)
    .filter((pal) => !query || palSearchText(pal).includes(query));

  ownedPalList.innerHTML = pals.map((pal) => ownedPalOption(pal)).join("")
    || `<p class="empty list-empty">没有匹配的帕鲁。</p>`;
  ownedPalCount.textContent = `已选 ${ownedPalIds.size} 只`;
}

function renderBreedRoute() {
  const target = targetChildSelect.value;
  const ownedSet = new Set([...ownedPalIds].filter((id) => palById.has(id)));
  const exactPlan = findBestPlan(target, ownedSet);

  if (!ownedSet.size) {
    breedRouteCount.textContent = "未选择已有帕鲁";
    breedRouteResult.innerHTML = `<p class="empty list-empty">先在左侧选择你已有的帕鲁。</p>`;
    return;
  }

  if (exactPlan) {
    breedRouteCount.textContent = exactPlan.round === 0 ? "已拥有目标" : `最少 ${exactPlan.round} 轮`;
    breedRouteResult.innerHTML = routePlanCard(exactPlan, exactPlan.round === 0 ? "已在已有池中" : "只用已有帕鲁");
    return;
  }

  const plans = recommendedPlans(target, ownedSet);
  breedRouteCount.textContent = plans.length ? `推荐 ${plans.length} 条路线` : "无法计算路线";
  breedRouteResult.innerHTML = plans.length
    ? plans.map((plan, index) => routePlanCard(plan, `推荐路线 ${index + 1}`)).join("")
    : `<p class="empty list-empty">当前数据里没有找到可行的补充路线。</p>`;
}

function renderRoutePlanner() {
  renderOwnedPalList();
  renderBreedRoute();
}

function applyInitialValues() {
  const params = new URLSearchParams(window.location.search);
  const first = params.get("parentA") || "lamball";
  const second = params.get("parentB") || "cattiva";
  const child = params.get("child") || "lamball";
  const single = params.get("single") || first;
  const owned = (params.get("owned") || `${first},${second}`)
    .split(",")
    .filter((id) => palById.has(id));

  [parentASelect, parentBSelect, targetChildSelect, singleParentSelect].forEach((select) => fillSelect(select));
  parentASelect.value = palById.has(first) ? first : "lamball";
  parentBSelect.value = palById.has(second) ? second : "cattiva";
  targetChildSelect.value = palById.has(child) ? child : "lamball";
  singleParentSelect.value = palById.has(single) ? single : parentASelect.value;
  ownedPalIds.clear();
  (owned.length ? owned : [parentASelect.value, parentBSelect.value]).forEach((id) => ownedPalIds.add(id));
}

function updateUrl() {
  const params = new URLSearchParams({
    parentA: parentASelect.value,
    parentB: parentBSelect.value,
    child: targetChildSelect.value,
    single: singleParentSelect.value,
    owned: [...ownedPalIds].join(",")
  });
  window.history.replaceState(null, "", `?${params}`);
}

function renderAll() {
  renderChildResult();
  renderParentCombos();
  renderSingleParentResults();
  renderRoutePlanner();
  updateUrl();
}

buildIndexes();
applyInitialValues();
enhancePalSelects();
breedDataCount.textContent = `${PAL_BREEDING.combos.length} 组本地数据`;

[parentASelect, parentBSelect].forEach((select) => {
  select.addEventListener("change", () => {
    renderChildResult();
    updateUrl();
  });
});

targetChildSelect.addEventListener("change", () => {
  renderParentCombos();
  renderBreedRoute();
  updateUrl();
});
parentComboSearch.addEventListener("input", renderParentCombos);
singleParentSelect.addEventListener("change", () => {
  renderSingleParentResults();
  updateUrl();
});
ownedPalSearch.addEventListener("input", renderOwnedPalList);
ownedPalList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"]');
  if (!checkbox) return;
  if (checkbox.checked) {
    ownedPalIds.add(checkbox.value);
  } else {
    ownedPalIds.delete(checkbox.value);
  }
  renderRoutePlanner();
  updateUrl();
});
useCurrentParentsButton.addEventListener("click", () => {
  ownedPalIds.clear();
  [parentASelect.value, parentBSelect.value].forEach((id) => ownedPalIds.add(id));
  renderRoutePlanner();
  updateUrl();
});
clearOwnedPalsButton.addEventListener("click", () => {
  ownedPalIds.clear();
  renderRoutePlanner();
  updateUrl();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".pal-select")) closePalSelects();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePalSelects();
});

renderAll();
