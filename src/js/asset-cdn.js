const REPO = "taoyunan/palworld-paldeck-cn";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
const CDN_BASES = [
  `https://cdn.jsdelivr.net/gh/${REPO}@main`,
  `https://fastly.jsdelivr.net/gh/${REPO}@main`,
  `https://gcore.jsdelivr.net/gh/${REPO}@main`,
  `https://testingcf.jsdelivr.net/gh/${REPO}@main`,
  `https://cdn.statically.io/gh/${REPO}/main`,
  `https://raw.gitmirror.com/${REPO}/main`,
  `https://raw.githubusercontent.com/${REPO}/main`,
  ""
];

const params = new URLSearchParams(window.location.search);
const forceCdn = params.get("cdn") === "1";
const disableCdn = params.get("cdn") === "0";
const shouldUseCdn = forceCdn || (!disableCdn && !LOCAL_HOSTS.has(window.location.hostname) && window.location.protocol !== "file:");
const initialIndex = shouldUseCdn ? 0 : CDN_BASES.length - 1;

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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => scanImages(), { once: true });
} else {
  scanImages();
}

window.PALDECK_ASSET_CDN_BASES = CDN_BASES.slice();
