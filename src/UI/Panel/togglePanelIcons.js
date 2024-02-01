import hidesPanel from "./hidesPanel";
import showsPanel from "./showsPanel";

// Change the open and close panel icons depending on the width of the window

const togglePanelIcons = () => {
  const toggPanelBtn = document.querySelector("#toggPanelBtn");
  if (window.innerWidth <= 700) {
    toggPanelBtn.textContent = "menu";
    toggPanelBtn.classList.remove("menu-open");
    toggPanelBtn.classList.add("menu-close");
    hidesPanel();
  } else {
    toggPanelBtn.textContent = "menu_open";
    toggPanelBtn.classList.remove("menu-cloe");
    toggPanelBtn.classList.add("menu-open");
    showsPanel();
  }
};

export default togglePanelIcons;
