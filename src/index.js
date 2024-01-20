import "./styles/main.css";
import noTranslateIcons from "./ui/noTranslateIcons";
import logoImg from "./img/logo.svg";
import togglePanelIcons from "./ui/togglePanelIcons";
import { togglePanel } from "./ui/togglePanel";

// Injects the main Logo
const myLogo = document.querySelector(".logo");
myLogo.src = logoImg;
myLogo.alt = 'Todo List Logo'

const toggPanelBtn = document.querySelector("#toggPanelBtn");
noTranslateIcons();
// Change the sidebar open and close icons when the DOM is loaded in function of the window width
window.addEventListener("DOMContentLoaded", () => {
  togglePanelIcons();
});
// Change the sidebar open and close icons when the window is resized in function of the window width
window.addEventListener("resize", () => {
  togglePanelIcons();
});

// Toggle the Panel at click on panel button
togglePanel();
