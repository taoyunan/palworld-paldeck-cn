import { MAP_DATABASE } from "./data/maps.js";

const MAP_SIZE = { X: 8192 * 16, Y: 8192 * 16 };
const DEFAULT_TYPES = new Set(["Alpha Pal", "Region", "Fast Travel", "Dungeon", "Black Marketeer"]);

const elements = {
  map: document.querySelector("#worldMap"),
  categories: document.querySelector("#mapCategories"),
  search: document.querySelector("#mapSearch"),
  clear: document.querySelector("#mapClearFilters"),
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
    icon.label,
    icon.category,
    point.comment,
    point.level,
    point.id
  ].join(" ").toLocaleLowerCase("zh-CN");
}

function pointMatches(point, data) {
  const query = elements.search.value.trim().toLocaleLowerCase("zh-CN");
  const typeMatches = state.activeTypes.size === 0 || state.activeTypes.has(point.type);
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
      const categoryCompare = String(left.icon.category).localeCompare(String(right.icon.category), "zh-Hans-CN");
      if (categoryCompare) return categoryCompare;
      return String(left.icon.label || left.type).localeCompare(String(right.icon.label || right.type), "zh-Hans-CN");
    });
}

function markerIcon(point, data) {
  const icon = data.icons[point.type] || {};
  const image = point.icon || icon.icon;
  if (!image) return null;
  const size = Math.max(24, Math.min(34, Number(icon.width || 30)));
  return L.icon({
    iconUrl: image,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

function fallbackMarker(latLng, point) {
  return L.circleMarker(latLng, {
    radius: point.type === "Region" ? 5 : 6.5,
    weight: 1.8,
    color: "#0b1920",
    fillColor: point.type === "Region" ? "#8df6ff" : "#ffb52e",
    fillOpacity: 0.92
  });
}

function popupHtml(point, data) {
  const icon = data.icons[point.type] || {};
  const meta = [
    icon.label || point.type,
    point.level ? `Lv.${point.level}` : "",
    point.comment || "",
    point.onlyTime ? `Only ${point.onlyTime}` : "",
    point.cooldown ? `CD ${point.cooldown}` : "",
    point.weight ? `Weight ${point.weight}` : ""
  ].filter(Boolean);
  const link = point.href ? `<a href="https://paldb.cc/cn/${encodeURIComponent(point.href)}" target="_blank" rel="noopener">PalDB</a>` : "";
  return `
    <div class="map-popup">
      <strong>${escapeHtml(point.item || icon.label || point.type)}</strong>
      <span>${escapeHtml(meta.join(" · "))}</span>
      ${link}
    </div>
  `;
}

function renderCategories() {
  const data = currentMapData();
  const categories = categoryEntries(data);
  elements.categories.innerHTML = categories.map((entry) => {
    const label = entry.icon.label || entry.type;
    return `
      <button type="button" class="map-category-button${state.activeTypes.has(entry.type) ? " active" : ""}" data-type="${escapeHtml(entry.type)}">
        ${entry.icon.icon ? `<img src="${escapeHtml(entry.icon.icon)}" alt="">` : "<span></span>"}
        <span>${escapeHtml(label)}</span>
        <small>${entry.count}</small>
      </button>
    `;
  }).join("");
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
  renderMarkers();
});

elements.search.addEventListener("input", () => renderMarkers());
elements.clear.addEventListener("click", () => {
  state.activeTypes.clear();
  renderCategories();
  renderMarkers();
});

loadMap(state.mapId);
