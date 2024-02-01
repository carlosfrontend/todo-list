import hidesPanel from "./hidesPanel";
import showsPanel from "./showsPanel";

function togglePanel() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");
   toggPanelBtn.classList.toggle("menu-open");
  toggPanelBtn.classList.toggle("menu-close");
  toggPanelBtn.textContent === "menu_open"
    ? (toggPanelBtn.textContent = "menu")
    : (toggPanelBtn.textContent = "menu_open");

  if (toggPanelBtn.textContent === "menu_open") {
    toggPanelBtn.textContent = "menu_open";
    showsPanel();
  } else {
    toggPanelBtn.textContent = "menu";
    hidesPanel();
  }
}

export default togglePanel;
