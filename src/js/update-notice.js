const UPDATE_NOTICE_VERSION = "2026-07-13-map-update";
const UPDATE_NOTICE_STORAGE_KEY = "palworld-paldeck:update-notice-version";

const UPDATE_ITEMS = [
  "互动地图底图已更新到最新版本。",
  "所有帕鲁的白天、夜晚栖息点位已重新抓取。",
  "新增世界树地图支持，跨区域帕鲁会按地图分别展示。",
  "栖息区域仍保留白天和夜晚两个区块。"
];

function hasSeenUpdateNotice() {
  try {
    return window.localStorage.getItem(UPDATE_NOTICE_STORAGE_KEY) === UPDATE_NOTICE_VERSION;
  } catch {
    return false;
  }
}

function markUpdateNoticeSeen() {
  try {
    window.localStorage.setItem(UPDATE_NOTICE_STORAGE_KEY, UPDATE_NOTICE_VERSION);
  } catch {
    // Ignore storage failures so the page remains usable in strict privacy modes.
  }
}

function createUpdateNotice() {
  const overlay = document.createElement("div");
  overlay.className = "update-notice-overlay";
  overlay.setAttribute("role", "presentation");
  overlay.innerHTML = `
    <section class="update-notice-dialog" role="dialog" aria-modal="true" aria-labelledby="updateNoticeTitle">
      <div class="update-notice-head">
        <p class="eyebrow">Update</p>
        <h2 id="updateNoticeTitle">本次更新</h2>
      </div>
      <ul class="update-notice-list">
        ${UPDATE_ITEMS.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button type="button" class="update-notice-confirm">确定</button>
    </section>
  `;

  const confirmButton = overlay.querySelector(".update-notice-confirm");
  confirmButton.addEventListener("click", () => {
    markUpdateNoticeSeen();
    overlay.remove();
  });

  document.body.append(overlay);
  confirmButton.focus();
}

if (!hasSeenUpdateNotice()) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createUpdateNotice, { once: true });
  } else {
    createUpdateNotice();
  }
}
