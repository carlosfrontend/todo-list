import notYetTasks from "./UI/Views/notYetTasks/notYetTasks";
import "./styles/main.css";
import logoImg from "./img/logo.svg";
import togglePanelIcons from "./UI/Panel/togglePanelIcons";
import togglePanel from "./UI/Panel/togglePanel";
import toggleAddTodoDialog from "./UI/Dialog/toggleAddTodoDialog";
import dropdown from "./UI/Dropdown/dropdown";
import toggleAddProjectDialog from "./UI/Dropdown/toggleAddProjectDialog";
import resetCalendar from "./UI/DateLocal/resetCalendar";
import setDefaultProject from "./Logic/setDefaultProject";
import addProject from "./UI/Crud/addProject";
import deleteProject from "./UI/Crud/deleteProject";
import showProjectInPanel from "./UI/Views/showProjectInPanel";
import getDataFromLocalStorage from "./LocalStorage/getDataFromLocalStorage";
import addTodo from "./UI/Crud/addTodo";

const initUI = () => {
  // When the page is loaded set the default project Inbox into localStorage
  setDefaultProject();
  const main = document.querySelector(".main");
  const myLogo = document.querySelector(".logo");
  // Inject the main Logo
  myLogo.src = logoImg;
  myLogo.alt = "Todo List Logo";
  main.appendChild(notYetTasks());
  // Change the sidebar open and close icons when the document is loaded
  window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 700) {
      document.querySelector("#toggPanelBtn").textContent = "menu";
    } else {
      document.querySelector("#toggPanelBtn").textContent = "menu_open";
    }
  });
  window.addEventListener("resize", () => {
    // Change the sidebar open and close icons when the window is resized in function of the window width
    togglePanelIcons();
  });

  document.addEventListener("click", (e) => {
    // Enable togglePanel at click on button
    if (e.target.closest("#toggPanelBtn")) {
      togglePanel();
    }
    if (e.target.id === "collapseBtn") {
      // Avtivate dropdown functionality for shows or hides projects in the projects box
      dropdown(e);
    }
    if (e.target.closest(".add")) {
      // Open and close the dialog for add Todos
      toggleAddTodoDialog();
    }
    if (e.target.id === "dueDate") {
      // Set the default date of the date-local field at today as min property
      resetCalendar(e);
    }
    // Open and close the add project dialog
    if (e.target.closest("#addProjBtn")) {
      toggleAddProjectDialog();
    }
  });
  // Add Todo
  addTodo();
  // Add projects
  addProject();

  if (getDataFromLocalStorage() !== null) {
    const parsed = getDataFromLocalStorage();
    parsed
      .filter((proj) => proj.name !== "Inbox")
      .map((el) => {
        showProjectInPanel(el);
      });
  }

  // Delete projects

  deleteProject();
};

export default initUI;
