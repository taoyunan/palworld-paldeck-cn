const REPO = "taoyunan/palworld-paldeck-cn";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
const CDN_STORAGE_KEY = "paldeck:asset-cdn-index";
const CDN_OPTIONS = [
  { label: "jsDelivr", base: `https://cdn.jsdelivr.net/gh/${REPO}@main` },
  { label: "jsDelivr Fastly", base: `https://fastly.jsdelivr.net/gh/${REPO}@main` },
  { label: "jsDelivr Gcore", base: `https://gcore.jsdelivr.net/gh/${REPO}@main` },
  { label: "jsDelivr Cloudflare", base: `https://testingcf.jsdelivr.net/gh/${REPO}@main` },
  { label: "Statically CDN", base: `https://cdn.statically.io/gh/${REPO}/main` },
  { label: "GitMirror", base: `https://raw.gitmirror.com/${REPO}/main` },
  { label: "GitHub Raw", base: `https://raw.githubusercontent.com/${REPO}/main` },
  { label: "本地线路", base: "" }
];
const CDN_BASES = CDN_OPTIONS.map((option) => option.base);

const params = new URLSearchParams(window.location.search);
const forceCdn = params.get("cdn") === "1";
const disableCdn = params.get("cdn") === "0";
const shouldUseCdn = forceCdn || (!disableCdn && !LOCAL_HOSTS.has(window.location.hostname) && window.location.protocol !== "file:");
const localIndex = CDN_BASES.length - 1;
let storedIndex = Number(window.localStorage.getItem(CDN_STORAGE_KEY));
if (!Number.isInteger(storedIndex) || storedIndex < 0 || storedIndex >= CDN_BASES.length) {
  storedIndex = null;
}
let useAutoCdn = storedIndex === null;
let initialIndex = storedIndex ?? (shouldUseCdn ? 0 : localIndex);

function normalizeAssetPath(value) {
  if (!value || /^(?:data|blob):/i.test(value)) {
    return "";
  }

  let pathname = value;
  try {
    const url = new URL(value, window.location.href);
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = value;
  }

  pathname = pathname.replace(/\\/g, "/");
  const assetsIndex = pathname.indexOf("/assets/");
  if (assetsIndex >= 0) {
    return pathname.slice(assetsIndex + 1);
  }

  pathname = pathname.replace(/^\.\//, "").replace(/^\/+/, "");
  if (pathname.startsWith(`${REPO.split("/")[1]}/`)) {
    pathname = pathname.slice(REPO.split("/")[1].length + 1);
  }
  return pathname.startsWith("assets/") ? pathname : "";
}

function localAssetUrl(assetPath) {
  return new URL(assetPath, new URL("./", window.location.href)).toString();
}

function cdnAssetUrl(assetPath, index) {
  const base = CDN_BASES[index] || "";
  return base ? `${base}/${assetPath}` : localAssetUrl(assetPath);
}

function activeCdnLabel() {
  const label = CDN_OPTIONS[initialIndex]?.label || CDN_OPTIONS[0].label;
  return useAutoCdn ? `自动线路：${label}` : label;
}

function manageImage(img) {
  const currentAssetPath = normalizeAssetPath(img.getAttribute("src"));
  const storedAssetPath = normalizeAssetPath(img.dataset.assetPath);
  const assetPath = currentAssetPath || storedAssetPath;
  if (!assetPath) {
    return;
  }

  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
  if (!img.hasAttribute("decoding")) {
    img.setAttribute("decoding", "async");
  }

  if (img.dataset.assetPath === assetPath && img.dataset.cdnManaged === "true") {
    return;
  }

  img.dataset.assetPath = assetPath;
  img.dataset.cdnIndex = String(initialIndex);
  img.dataset.cdnManaged = "true";

  if (shouldUseCdn) {
    const nextSrc = cdnAssetUrl(assetPath, initialIndex);
    if (img.src !== nextSrc) {
      img.src = nextSrc;
    }
  }
}

function scanImages(root = document) {
  if (root instanceof HTMLImageElement) {
    manageImage(root);
    return;
  }
  root.querySelectorAll?.("img").forEach(manageImage);
}

function applyCdnIndex(index, { persist = true } = {}) {
  if (!Number.isInteger(index) || index < 0 || index >= CDN_BASES.length) return;
  initialIndex = index;
  useAutoCdn = !persist;
  if (persist) {
    window.localStorage.setItem(CDN_STORAGE_KEY, String(index));
  } else {
    window.localStorage.removeItem(CDN_STORAGE_KEY);
  }
  document.querySelectorAll("img[data-cdn-managed='true']").forEach((img) => {
    const assetPath = img.dataset.assetPath;
    if (!assetPath) return;
    img.dataset.cdnIndex = String(index);
    img.src = cdnAssetUrl(assetPath, index);
  });
}

function installFloatingControls() {
  if (document.querySelector(".asset-cdn-controls")) return;

  const style = document.createElement("style");
  style.textContent = `
    .asset-cdn-controls {
      position: fixed;
      right: max(16px, env(safe-area-inset-right));
      bottom: max(18px, env(safe-area-inset-bottom));
      z-index: 10000;
      display: grid;
      gap: 8px;
      justify-items: end;
      font-family: inherit;
    }

    .asset-cdn-buttons {
      display: grid;
      gap: 8px;
    }

    .asset-cdn-button {
      width: 48px;
      min-height: 44px;
      border: 1px solid rgba(18, 231, 242, 0.48);
      border-radius: 8px;
      background: rgba(3, 31, 43, 0.92);
      color: #e9fdff;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.26);
      cursor: pointer;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0;
    }

    .asset-cdn-button:hover,
    .asset-cdn-button:focus-visible {
      border-color: #12e7f2;
      background: rgba(6, 67, 84, 0.96);
      outline: none;
    }

    .asset-cdn-menu {
      display: none;
      width: min(260px, calc(100vw - 32px));
      max-height: min(420px, calc(100vh - 120px));
      overflow: auto;
      padding: 10px;
      border: 1px solid rgba(18, 231, 242, 0.34);
      border-radius: 8px;
      background: rgba(3, 31, 43, 0.98);
      box-shadow: 0 18px 46px rgba(0, 0, 0, 0.36);
    }

    .asset-cdn-controls.open .asset-cdn-menu {
      display: grid;
      gap: 6px;
    }

    .asset-cdn-menu-title {
      margin: 0 0 4px;
      color: #8df6ff;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .asset-cdn-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      min-height: 36px;
      padding: 0 10px;
      border: 1px solid rgba(155, 203, 211, 0.24);
      border-radius: 6px;
      background: rgba(1, 20, 28, 0.72);
      color: #e9fdff;
      cursor: pointer;
      font: inherit;
      font-size: 13px;
      font-weight: 800;
      text-align: left;
    }

    .asset-cdn-option.active {
      border-color: #12e7f2;
      background: rgba(18, 231, 242, 0.16);
      color: #fff;
    }

    .asset-cdn-option small {
      color: #8fb8c3;
      font-size: 11px;
      font-weight: 900;
      white-space: nowrap;
    }
  `;
  document.head.append(style);

  const controls = document.createElement("div");
  controls.className = "asset-cdn-controls";
  controls.innerHTML = `
    <div class="asset-cdn-menu" role="menu" aria-label="选择图片线路">
      <p class="asset-cdn-menu-title">选择图片线路</p>
      <button class="asset-cdn-option" type="button" data-auto="true" role="menuitem">
        <span>自动线路</span>
        <small>推荐</small>
      </button>
      ${CDN_OPTIONS.map((option, index) => `
        <button class="asset-cdn-option" type="button" data-cdn-index="${index}" role="menuitem">
          <span>${option.label}</span>
          <small>${index === localIndex ? "本地" : "CDN"}</small>
        </button>
      `).join("")}
    </div>
    <div class="asset-cdn-buttons">
      <button class="asset-cdn-button asset-top-button" type="button" title="回到顶部" aria-label="回到顶部">↑</button>
      <button class="asset-cdn-button asset-route-button" type="button" aria-label="选择图片线路">线路</button>
    </div>
  `;
  document.body.append(controls);

  const routeButton = controls.querySelector(".asset-route-button");
  const refreshActive = () => {
    routeButton.title = `当前线路：${activeCdnLabel()}`;
    controls.querySelectorAll(".asset-cdn-option").forEach((button) => {
      const isAuto = button.dataset.auto === "true";
      const index = Number(button.dataset.cdnIndex);
      button.classList.toggle("active", isAuto ? useAutoCdn : !useAutoCdn && index === initialIndex);
    });
  };

  controls.querySelector(".asset-top-button").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  routeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    controls.classList.toggle("open");
    refreshActive();
  });

  controls.querySelector(".asset-cdn-menu").addEventListener("click", (event) => {
    const button = event.target.closest(".asset-cdn-option");
    if (!button) return;
    if (button.dataset.auto === "true") {
      applyCdnIndex(shouldUseCdn ? 0 : localIndex, { persist: false });
    } else {
      applyCdnIndex(Number(button.dataset.cdnIndex));
    }
    refreshActive();
    controls.classList.remove("open");
  });

  document.addEventListener("click", (event) => {
    if (!controls.contains(event.target)) controls.classList.remove("open");
  });

  refreshActive();
}

document.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || img.dataset.cdnManaged !== "true") {
      return;
    }

    const assetPath = img.dataset.assetPath;
    const currentIndex = Number(img.dataset.cdnIndex || initialIndex);
    const nextIndex = currentIndex + 1;
    if (!assetPath || nextIndex >= CDN_BASES.length) {
      return;
    }

    img.dataset.cdnIndex = String(nextIndex);
    img.src = cdnAssetUrl(assetPath, nextIndex);
  },
  true
);

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      manageImage(mutation.target);
      continue;
    }
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        scanImages(node);
      }
    });
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["src"]
});

function bootAssetTools() {
  scanImages();
  installFloatingControls();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootAssetTools, { once: true });
} else {
  bootAssetTools();
}

window.PALDECK_ASSET_CDN_BASES = CDN_BASES.slice();
