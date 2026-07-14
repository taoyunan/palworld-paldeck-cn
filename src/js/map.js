import { MAP_DATABASE } from "./data/maps.js";

const MAP_SIZE = { X: 8192 * 16, Y: 8192 * 16 };
const DEFAULT_TYPES = new Set(["Alpha Pal", "Region", "Fast Travel", "Dungeon", "Black Marketeer"]);
const MARKER_STYLE_BY_TYPE = {
  "Alpha Pal": { className: "boss", size: 34, radius: 8.5, color: "#ff4f8b" },
  Tower: { className: "major", size: 32, radius: 8, color: "#8df6ff" },
  "Fast Travel": { className: "landmark", size: 30, radius: 7.5, color: "#8df6ff" },
  Dungeon: { className: "landmark", size: 30, radius: 7.5, color: "#8df6ff" },
  "Black Marketeer": { className: "landmark", size: 30, radius: 7.5, color: "#8df6ff" },
  Region: { className: "region", size: 22, radius: 5.5, color: "#8df6ff" }
};
const DEFAULT_MARKER_STYLE = { className: "normal", size: 24, radius: 5.5, color: "#ffb52e" };
const CATEGORY_ORDER = ["Locations", "Enemies", "Resource", "Mine", "Eggs", "Fishing", "Collectibles", "NPCs", "Oilrig", "Other"];
const CATEGORY_LABELS = {
  Collectibles: "收集品",
  Eggs: "帕鲁蛋",
  Enemies: "敌人与事件",
  Fishing: "钓鱼与打捞",
  Locations: "地点",
  Mine: "矿物",
  NPCs: "NPC",
  Oilrig: "油田",
  Other: "其他",
  Resource: "资源"
};
const TYPE_LABELS = {
  "Ancient Ruin": "古代遗迹",
  "Anti-Air Turret": "防空炮塔",
  "Cave Entrance": "洞穴入口",
  City: "城镇",
  "Coal Cluster": "石炭矿群",
  "Desert Egg": "沙漠蛋",
  Dungeon: "地下城",
  "Enemy Camp": "敌人营地",
  "Feybreak Egg": "天坠之地蛋",
  "Fishing Spot": "钓鱼点",
  "Frozen Egg": "冰冻蛋",
  "Fruit Tree": "果树",
  "Grass Egg": "草原蛋",
  "Heat Source": "热源",
  Home: "推荐据点",
  Incident: "事件",
  Junk: "废料",
  "Memo Planner": "备忘录",
  NPC: "NPC",
  "Oilrig Treasure": "油田宝箱",
  "Oilrig Treasure Goal": "油田核心宝箱",
  "Ore Cluster": "金属矿群",
  "Pure Quartz Cluster": "纯水晶矿群",
  Region: "区域",
  "Sakura Egg": "樱岛蛋",
  "Salvage Rank1": "打捞点 I",
  "Salvage Rank2": "打捞点 II",
  "Skyland Warp Altar": "天岛传送祭坛",
  "Sulfur Cluster": "硫磺矿群",
  Sunreach: "朝阳岛",
  "Sunreach Egg": "朝阳岛蛋",
  Supply: "补给品",
  Treasure: "宝箱",
  "Treasure Element": "属性宝箱",
  Unknown: "未知",
  Volcano: "火山",
  "Volcano Egg": "火山蛋",
  Watchtower: "瞭望塔",
  "World Tree Egg": "世界树蛋"
};

const elements = {
  map: document.querySelector("#worldMap"),
  categories: document.querySelector("#mapCategories"),
  search: document.querySelector("#mapSearch"),
  clear: document.querySelector("#mapClearFilters"),
  statues: document.querySelector("#mapShowStatues"),
  count: document.querySelector("#mapVisibleCount"),
  source: document.querySelector("#mapSourceLabel"),
  switchButtons: [...document.querySelectorAll("[data-map-id]")]
};

const state = {
  mapId: new URLSearchParams(window.location.search).get("map") === "tree" ? "tree" : "main",
  activeTypes: new Set(),
  layer: null,
  tileLayer: null
};

const leafletMap = L.map(elements.map, {
  minZoom: 0,
  maxZoom: 8,
  crs: L.CRS.Simple,
  preferCanvas: true,
  zoomSnap: 0.25,
  zoomDelta: 0.5,
  wheelPxPerZoomLevel: 80,
  attributionControl: false,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  touchZoom: true,
  boxZoom: true,
  zoomControl: true,
  zoomAnimation: true,
  fadeAnimation: false,
  markerZoomAnimation: true,
  maxBoundsViscosity: 1
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function currentMapData() {
  return MAP_DATABASE[state.mapId] || MAP_DATABASE.main;
}

function categoryRank(category) {
  const index = CATEGORY_ORDER.indexOf(category);
  return index === -1 ? CATEGORY_ORDER.length : index;
}

function categoryLabel(category) {
  return CATEGORY_LABELS[category] || category || CATEGORY_LABELS.Other;
}

function typeLabel(type, icon = {}) {
  const label = TYPE_LABELS[type] || icon.label || type;
  return TYPE_LABELS[label] || label;
}

function normalizedConfig(data) {
  return {
    ...data.config,
    minMapTextureBlockSize: MAP_SIZE
  };
}

function createBounds(data) {
  const config = normalizedConfig(data);
  const maxZoom = leafletMap.getMaxZoom();
  return L.latLngBounds(
    leafletMap.unproject([0, config.minMapTextureBlockSize.Y], maxZoom),
    leafletMap.unproject([config.minMapTextureBlockSize.X, 0], maxZoom)
  );
}

function rposToScale(data, point) {
  const config = data.config;
  return {
    X: (point.X - config.landScapeRealPositionMin.X)
      / (config.landScapeRealPositionMax.X - config.landScapeRealPositionMin.X),
    Y: (point.Y - config.landScapeRealPositionMin.Y)
      / (config.landScapeRealPositionMax.Y - config.landScapeRealPositionMin.Y)
  };
}

function iposToScale(data, point) {
  const options = data.options;
  return {
    X: (point.Y + options.ingame_x_start) / options.transform_x_pixel,
    Y: (point.X + options.ingame_y_start) / options.transform_y_pixel
  };
}

function scaleToLatLng(scale) {
  const maxZoom = leafletMap.getMaxZoom();
  return leafletMap.unproject([
    scale.Y * MAP_SIZE.Y,
    (1 - scale.X) * MAP_SIZE.X
  ], maxZoom);
}

function pointToLatLng(data, point) {
  if (point.pos) return scaleToLatLng(rposToScale(data, point.pos));
  return scaleToLatLng(iposToScale(data, point.ipos));
}

function pointText(point, data) {
  const icon = data.icons[point.type] || {};
  return [
    point.item,
    point.type,
    typeLabel(point.type, icon),
    categoryLabel(icon.category),
    point.comment,
    point.level,
    point.id
  ].join(" ").toLocaleLowerCase("zh-CN");
}

function pointMatches(point, data) {
  const query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  const typeMatches = state.activeTypes.size > 0 && state.activeTypes.has(point.type);
  return typeMatches && (!query || pointText(point, data).includes(query));
}

function categoryEntries(data) {
  const counts = new Map();
  for (const point of data.points) {
    counts.set(point.type, (counts.get(point.type) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([type, count]) => ({
      type,
      count,
      icon: data.icons[type] || { label: type, category: "Other", icon: "" }
    }))
    .sort((left, right) => {
      const rankCompare = categoryRank(left.icon.category) - categoryRank(right.icon.category);
      if (rankCompare) return rankCompare;
      return typeLabel(left.type, left.icon).localeCompare(typeLabel(right.type, right.icon), "zh-Hans-CN");
    });
}

function statueTypes(data) {
  return categoryEntries(data)
    .filter((entry) => entry.type.includes("Effigy"))
    .map((entry) => entry.type);
}

function groupedCategoryEntries(data) {
  const groups = new Map();
  for (const entry of categoryEntries(data)) {
    const category = entry.icon.category || "Other";
    if (!groups.has(category)) {
      groups.set(category, {
        category,
        label: categoryLabel(category),
        items: []
      });
    }
    groups.get(category).items.push(entry);
  }
  return [...groups.values()].sort((left, right) => {
    const rankCompare = categoryRank(left.category) - categoryRank(right.category);
    if (rankCompare) return rankCompare;
    return left.label.localeCompare(right.label, "zh-Hans-CN");
  });
}

function syncQuickButtons(data) {
  const statues = statueTypes(data);
  const isStatueFilter = statues.length > 0
    && state.activeTypes.size === statues.length
    && statues.every((type) => state.activeTypes.has(type));
  elements.statues.classList.toggle("active", isStatueFilter);
}

function mapIconHtml(image, label = "", extraClass = "") {
  return `
    <span class="map-icon-ring${extraClass ? ` ${extraClass}` : ""}">
      ${image ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(label)}">` : ""}
    </span>
  `;
}

function markerStyle(type) {
  return MARKER_STYLE_BY_TYPE[type] || DEFAULT_MARKER_STYLE;
}

function markerIcon(point, data) {
  const icon = data.icons[point.type] || {};
  const image = point.icon || icon.icon;
  if (!image) return null;
  const style = markerStyle(point.type);
  return L.divIcon({
    className: `map-marker-icon ${style.className}`,
    html: mapIconHtml(image, point.item || typeLabel(point.type, icon), style.className),
    iconSize: [style.size, style.size],
    iconAnchor: [style.size / 2, style.size / 2],
    popupAnchor: [0, -style.size / 2]
  });
}

function fallbackMarker(latLng, point) {
  const style = markerStyle(point.type);
  return L.circleMarker(latLng, {
    radius: style.radius,
    weight: style.className === "normal" ? 1.5 : 2,
    color: "#0b1920",
    fillColor: style.color,
    fillOpacity: 0.92
  });
}

function popupHtml(point, data) {
  const icon = data.icons[point.type] || {};
  const meta = [
    typeLabel(point.type, icon),
    point.level ? `Lv.${point.level}` : "",
    point.comment || "",
    point.onlyTime ? `限定时间 ${point.onlyTime}` : "",
    point.cooldown ? `CD ${point.cooldown}` : "",
    point.weight ? `权重 ${point.weight}` : ""
  ].filter(Boolean);
  return `
    <div class="map-popup">
      <strong>${escapeHtml(point.item || icon.label || point.type)}</strong>
      <span>${escapeHtml(meta.join(" · "))}</span>
    </div>
  `;
}

function renderCategories() {
  const data = currentMapData();
  const groups = groupedCategoryEntries(data);
  elements.categories.innerHTML = groups.map((group) => `
    <section class="map-category-group">
      <h3>${escapeHtml(group.label)}</h3>
      <div class="map-category-items">
        ${group.items.map((entry) => {
          const label = typeLabel(entry.type, entry.icon);
          return `
            <button type="button" class="map-category-button${state.activeTypes.has(entry.type) ? " active" : ""}" data-type="${escapeHtml(entry.type)}">
              ${mapIconHtml(entry.icon.icon, label)}
              <span>${escapeHtml(label)}</span>
              <small>${entry.count}</small>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
  syncQuickButtons(data);
}

function renderMarkers({ fit = false } = {}) {
  const data = currentMapData();
  const points = data.points.filter((point) => pointMatches(point, data));
  state.layer.clearLayers();

  const latLngs = [];
  for (const point of points) {
    const latLng = pointToLatLng(data, point);
    latLngs.push(latLng);
    const icon = markerIcon(point, data);
    const marker = icon
      ? L.marker(latLng, { icon })
      : fallbackMarker(latLng, point);
    marker.bindPopup(popupHtml(point, data)).addTo(state.layer);
  }

  elements.count.textContent = points.length.toLocaleString("zh-CN");
  if (fit && latLngs.length) {
    leafletMap.fitBounds(L.latLngBounds(latLngs), { padding: [60, 60], maxZoom: 3 });
  }
}

function syncUrl() {
  const params = new URLSearchParams({ map: state.mapId });
  window.history.replaceState(null, "", `?${params}`);
}

function resetActiveTypes(data) {
  state.activeTypes = new Set(data.points
    .map((point) => point.type)
    .filter((type) => DEFAULT_TYPES.has(type)));
  if (!state.activeTypes.size) {
    state.activeTypes = new Set(categoryEntries(data).slice(0, 6).map((entry) => entry.type));
  }
}

function loadMap(mapId) {
  state.mapId = mapId;
  const data = currentMapData();
  elements.source.textContent = data.label;
  elements.switchButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mapId === state.mapId);
  });

  if (state.tileLayer) state.tileLayer.remove();
  if (state.layer) state.layer.remove();

  const bounds = createBounds(data);
  leafletMap.setMaxBounds(bounds.pad(0.02));
  state.tileLayer = L.tileLayer(data.tileUrl, {
    bounds,
    maxNativeZoom: 4,
    maxZoom: 8,
    minZoom: 0,
    tileSize: 512,
    noWrap: true,
    keepBuffer: 8,
    updateWhenIdle: false,
    updateWhenZooming: true,
    reuseTiles: true
  }).addTo(leafletMap);
  state.layer = L.layerGroup().addTo(leafletMap);
  leafletMap.fitBounds(bounds, { animate: false });
  resetActiveTypes(data);
  renderCategories();
  renderMarkers();
  syncUrl();
  setTimeout(() => leafletMap.invalidateSize(), 0);
}

elements.switchButtons.forEach((button) => {
  button.addEventListener("click", () => loadMap(button.dataset.mapId));
});

elements.categories.addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button) return;
  const type = button.dataset.type;
  if (state.activeTypes.has(type)) {
    state.activeTypes.delete(type);
  } else {
    state.activeTypes.add(type);
  }
  button.classList.toggle("active", state.activeTypes.has(type));
  syncQuickButtons(currentMapData());
  renderMarkers();
});

elements.search.addEventListener("input", () => renderMarkers());
elements.statues.addEventListener("click", () => {
  const data = currentMapData();
  state.activeTypes = new Set(statueTypes(data));
  elements.search.value = "";
  renderCategories();
  renderMarkers({ fit: true });
});
elements.clear.addEventListener("click", () => {
  state.activeTypes.clear();
  elements.search.value = "";
  renderCategories();
  renderMarkers();
});

loadMap(state.mapId);
