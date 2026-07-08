import { PALS } from "./data/pals.js";
import {
  elementBadge,
  elementBadges,
  escapeHtml,
  getPalElements,
  imageAttrs,
  workBadge
} from "./pal-icons.js";

const MAP_CONFIG = {
  minMapTextureBlockSize: { X: 8192 * 16, Y: 8192 * 16 },
  landScapeRealPositionMin: { X: -999940, Y: -737262 },
  landScapeRealPositionMax: { X: 447900, Y: 710578 }
};

const detail = document.querySelector("#palDetail");
const initialPalId = new URLSearchParams(window.location.search).get("pal");
const activePalId = PALS.some((pal) => pal.id === initialPalId) ? initialPalId : PALS[0]?.id;
let activeMaps = [];

function statPanel(pal) {
  if (!pal.stats?.length) return `<p class="empty">暂无基础数值</p>`;
  return `
    <div class="stat-grid">
      ${pal.stats.map(([label, value]) => `
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function isSameText(left = "", right = "") {
  return String(left).replace(/\s+/g, "") === String(right).replace(/\s+/g, "");
}

function partnerSkillPanel(pal) {
  const name = pal.partnerSkill?.name || "伙伴技能";
  const summary = pal.partnerSkill?.summary || "";

  return `
    <article class="panel intro-panel">
      <div>
        <p class="eyebrow">Partner Skill</p>
        <h3>${escapeHtml(name)}</h3>
      </div>
      <p>${escapeHtml(summary || "暂无伙伴技能说明")}</p>
    </article>
  `;
}

function heroDescription(pal) {
  return pal.description || pal.tagline || `${pal.name} 的图鉴资料。`;
}

function renderHabitatMapShell(pal) {
  const maps = pal.habitatMaps?.length ? pal.habitatMaps : [
    { label: "白天", time: "dayTimeLocations", locations: [] },
    { label: "夜晚", time: "nightTimeLocations", locations: [] }
  ];

  return maps.map((map, index) => {
    const count = Array.isArray(map.locations) ? map.locations.length : Number(map.count || 0);
    const timeClass = map.time === "nightTimeLocations" ? "night" : "day";
    return `
      <figure class="habitat-map">
        <figcaption>
          <span class="habitat-caption-title"><i class="habitat-dot ${timeClass}" aria-hidden="true"></i>${escapeHtml(map.label)}</span>
          <small>${count} 个点位</small>
        </figcaption>
        <div class="habitat-leaflet" data-habitat-index="${index}"></div>
      </figure>
    `;
  }).join("");
}

function renderDetail() {
  const pal = PALS.find((item) => item.id === activePalId) || PALS[0];
  if (!pal) return;

  document.title = `帕鲁图鉴 - ${pal.name}`;
  activeMaps.forEach((map) => map.remove());
  activeMaps = [];

  detail.innerHTML = `
    <section class="hero" id="profile">
      <div class="hero-copy">
        <p class="eyebrow">${pal.no ? `No.${escapeHtml(pal.no)} · ` : ""}${escapeHtml(pal.englishName)}</p>
        <h2>${escapeHtml(pal.name)}</h2>
        <div class="hero-tags">
          ${elementBadges(getPalElements(pal))}
          <span>${escapeHtml(pal.rarity)}</span>
        </div>
        <p>${escapeHtml(heroDescription(pal))}</p>
      </div>
      <div class="pal-portrait">
        <img ${imageAttrs(pal.image, pal.name)}>
      </div>
    </section>

    <section class="info-grid">
      ${partnerSkillPanel(pal)}
      <article class="panel stat-panel">
        <p class="eyebrow">Stats</p>
        <h3>基础数值</h3>
        ${statPanel(pal)}
      </article>
    </section>

    <section class="split-row">
      <article class="panel" id="work">
        <p class="eyebrow">Work Suitability</p>
        <h3>工作适应性</h3>
        <div class="work-list">
          ${pal.work.map((item) => `
            <div class="work-item">
              ${workBadge(item)}
            </div>
          `).join("") || `<p class="empty">无</p>`}
        </div>
      </article>

      <article class="panel" id="drops">
        <p class="eyebrow">Drops</p>
        <h3>掉落物</h3>
        <div class="drop-list">
          ${pal.drops.map((item) => `
            <div class="drop-item">
              <img ${imageAttrs(item.icon, item.name)}>
              <span>${escapeHtml(item.name)}</span>
              <strong>${escapeHtml(item.amount)}</strong>
              <small>${escapeHtml(item.chance)}</small>
            </div>
          `).join("") || `<p class="empty">无</p>`}
        </div>
      </article>
    </section>

    <section class="panel" id="skills">
      <div class="section-head">
        <div>
          <p class="eyebrow">Active Skills</p>
          <h3>主动技能</h3>
        </div>
        <span class="section-count">${pal.skills.length} 项</span>
      </div>
      <div class="skill-table">
        ${pal.skills.map((skill) => `
          <article class="skill-row">
            <div class="skill-level">Lv.${escapeHtml(skill.level)}</div>
            <div>
              <h4>${escapeHtml(skill.name)}</h4>
              <p>${escapeHtml(skill.description)}</p>
            </div>
            ${elementBadge(skill.element)}
            <strong>威力 ${escapeHtml(skill.power)}</strong>
            <small>冷却 ${escapeHtml(skill.cooldown)}s</small>
          </article>
        `).join("") || `<p class="empty">暂无主动技能</p>`}
      </div>
    </section>

    <section class="panel habitat-panel" id="habitat">
      <div class="section-head">
        <div>
          <p class="eyebrow">Habitat</p>
          <h3>栖息区域</h3>
        </div>
      </div>
      <div class="habitat-map-grid">
        ${renderHabitatMapShell(pal)}
      </div>
    </section>
  `;

  initializeHabitatMaps(pal);
}

function createBounds(map) {
  const maxZoom = map.getMaxZoom();
  return L.latLngBounds(
    map.unproject([0, MAP_CONFIG.minMapTextureBlockSize.Y], maxZoom),
    map.unproject([MAP_CONFIG.minMapTextureBlockSize.X, 0], maxZoom)
  );
}

function pointToLatLng(map, point) {
  const maxZoom = map.getMaxZoom();
  const scaleX = (point.X - MAP_CONFIG.landScapeRealPositionMin.X)
    / (MAP_CONFIG.landScapeRealPositionMax.X - MAP_CONFIG.landScapeRealPositionMin.X);
  const scaleY = (point.Y - MAP_CONFIG.landScapeRealPositionMin.Y)
    / (MAP_CONFIG.landScapeRealPositionMax.Y - MAP_CONFIG.landScapeRealPositionMin.Y);

  return map.unproject([
    scaleY * MAP_CONFIG.minMapTextureBlockSize.Y,
    (1 - scaleX) * MAP_CONFIG.minMapTextureBlockSize.X
  ], maxZoom);
}

function initializeHabitatMaps(pal) {
  if (!window.L) {
    document.querySelectorAll(".habitat-leaflet").forEach((container) => {
      container.innerHTML = `<p class="empty">地图组件加载失败</p>`;
    });
    return;
  }

  const mapData = pal.habitatMaps || [];
  document.querySelectorAll(".habitat-leaflet").forEach((container) => {
    const habitat = mapData[Number(container.dataset.habitatIndex)] || {};
    const locations = Array.isArray(habitat.locations) ? habitat.locations : [];
    const leafletMap = L.map(container, {
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
    activeMaps.push(leafletMap);

    const bounds = createBounds(leafletMap);
    leafletMap.setMaxBounds(bounds.pad(0.02));
    L.tileLayer("https://cdn.paldb.cc/image/map7/z{z}x{x}y{y}.webp", {
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
    leafletMap.fitBounds(bounds, { animate: false });

    const markerColor = habitat.time === "nightTimeLocations" ? "#12dfff" : "#ff3355";
    const radius = locations.length > 500 ? 4.6 : locations.length > 80 ? 5.5 : 7;
    locations.forEach((point, index) => {
      const latLng = pointToLatLng(leafletMap, point);
      L.circleMarker(latLng, {
        radius: radius + 2.8,
        weight: 0,
        fillColor: "#ffffff",
        fillOpacity: 0.55,
        interactive: false
      }).addTo(leafletMap);
      L.circleMarker(latLng, {
        radius,
        weight: 1.7,
        color: "#111820",
        fillColor: markerColor,
        fillOpacity: 0.96
      }).bindPopup(`${escapeHtml(pal.name)} · ${escapeHtml(habitat.label || "")} · ${index + 1}`).addTo(leafletMap);
    });

    setTimeout(() => leafletMap.invalidateSize(), 0);
  });
}

renderDetail();
