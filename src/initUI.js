import notYetTasks from "./UI/Views/notYetTasks/notYetTasks";
import "./styles/main.css";
import logoImg from "./img/logo.svg";
import togglePanelIcons from "./UI/Panel/togglePanelIcons";
import { togglePanel } from "./UI/Panel/togglePanel";
import toggleAddTaskDialog from "./UI/Dialog/toggleAddTaskDialog";
import dropdown from "./UI/Dropdown/dropdown";
import toggleAddProjectDialog from "./UI/Dropdown/toggleAddProjectDialog";
import resetCalendar from "./UI/DateLocal/resetCalendar";
import toggleFolderIcon from "./UI/Dropdown/toggleFolderIcon";
import getProyectsAndTodosFromLocalStorage from "./Logic/getProyectsAndTodosFromLocalStorage";
import showsAllCounters from "./UI/Panel/showsAllCounters";
import createDefaultProject from "./Logic/createDefaultProject";

const initUI = () => {
  const main = document.querySelector(".main");
  const myLogo = document.querySelector(".logo");

  // Injects the main Logo
  myLogo.src = logoImg;
  myLogo.alt = "Todo List Logo";

  window.addEventListener("DOMContentLoaded", () => {
    // Creates a Default "Inbox" Project
    createDefaultProject();
    getProyectsAndTodosFromLocalStorage();
    // Actives all counters
    showsAllCounters();
    // Change the sidebar open and close icons when the DOM is loaded in function of the window width
    togglePanelIcons();
    // Toggle Projects dropdown menu
    dropdown();
    // Open the add project dialog
    toggleAddProjectDialog();
    // Set the default date of the date-local field at today as min property
    resetCalendar();
    // Change folder icons to opens or closes when user click it
    toggleFolderIcon();
  });

  // Change the sidebar open and close icons when the window is resized in function of the window width
  window.addEventListener("resize", () => {
    togglePanelIcons();
  });

  // Toggle the Panel at click on panel button
  togglePanel();

  // Toggle Add Task dialog
  toggleAddTaskDialog();

  main.appendChild(notYetTasks());
};

export default initUI;
