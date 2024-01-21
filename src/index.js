import "./styles/main.css";
import logoImg from "./img/logo.svg";
import togglePanelIcons from "./UI/Panel/togglePanelIcons";
import { togglePanel } from "./UI/Panel/togglePanel";
import todoListDB from "./DB/todoListDB";
import init from "./init";

// Injects the main Logo
const myLogo = document.querySelector(".logo");
myLogo.src = logoImg;
myLogo.alt = "Todo List Logo";

const toggPanelBtn = document.querySelector("#toggPanelBtn");

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


// Start the database

todoListDB();

// Start UI

init();