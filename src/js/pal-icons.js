export const IMAGE_FALLBACK = "./src/assets/paldeck/pal-placeholder.svg";

export const ELEMENT_ICONS = {
  "无属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_00.webp",
  "火属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_01.webp",
  "水属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_02.webp",
  "雷属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_03.webp",
  "草属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_04.webp",
  "暗属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_05.webp",
  "地属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_06.webp",
  "龙属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_07.webp",
  "冰属性": "./assets/paldb/image/Pal/Texture/UI/InGame/T_Icon_element_s_08.webp"
};

export const ELEMENT_CLASS_NAMES = {
  "无属性": "element-neutral",
  "火属性": "element-fire",
  "水属性": "element-water",
  "雷属性": "element-electric",
  "草属性": "element-grass",
  "暗属性": "element-dark",
  "地属性": "element-ground",
  "龙属性": "element-dragon",
  "冰属性": "element-ice"
};

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function imageTag(src, alt = "", className = "") {
  const source = src || IMAGE_FALLBACK;
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<img src="${escapeHtml(source)}" alt="${escapeHtml(alt)}"${classAttr} onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';this.classList.add('is-fallback')">`;
}

export function imageAttrs(src, alt = "") {
  const source = src || IMAGE_FALLBACK;
  return `src="${escapeHtml(source)}" alt="${escapeHtml(alt)}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}';this.classList.add('is-fallback')"`;
}

export function getPalElements(pal) {
  return String(pal.element || "未知").split("/").map((item) => item.trim()).filter(Boolean);
}

export function getElementIcon(element) {
  return ELEMENT_ICONS[element] || "";
}

export function elementClassName(element) {
  return ELEMENT_CLASS_NAMES[element] || "element-unknown";
}

export function getWorkIconMap(pals) {
  const iconMap = new Map();
  pals.forEach((pal) => {
    (pal.work || []).forEach((item) => {
      if (item.name && item.icon && !iconMap.has(item.name)) {
        iconMap.set(item.name, item.icon);
      }
    });
  });
  return iconMap;
}

export function elementBadge(element) {
  return `<span class="icon-badge element-badge ${elementClassName(element)}">${imageTag(getElementIcon(element), element)}<span class="badge-label">${escapeHtml(element)}</span></span>`;
}

export function elementBadges(elements) {
  return elements.map((element) => elementBadge(element)).join("");
}

export function workBadge(item) {
  return `<span class="icon-badge work-badge" title="${escapeHtml(item.name)}">${imageTag(item.icon, item.name)}<span class="badge-label">${escapeHtml(item.name)} Lv.${escapeHtml(item.level)}</span></span>`;
}
