// import notYetTasks from "./UI/Views/notYetTasks/notYetTasks";
import "./styles/main.css";
import logoImg from "./img/logo.svg";
import logoGh from "./img/github.svg";
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
import showProjectAndTodos from "./UI/Views/showProjectAndTodos";

const initUI = () => {
  const todolist = getDataFromLocalStorage();
  // When the page is loaded set the default project Inbox into localStorage
  setDefaultProject();
  const myLogo = document.querySelector(".logo");
  const ghLogo = document.querySelector(".gh-logo");
  // Inject the main Logo and footer logo
  myLogo.src = logoImg;
  ghLogo.src = logoGh;
  myLogo.alt = "Todo List Logo";
  ghLogo.alt = "Github Logo";
  // When the page is loaded set the focus in Inbox
  document.querySelector("#inbox-in-tasks-box").focus();
  if(todolist !== null){
    showProjectAndTodos(todolist[0].name);
  }

  // Add todo
  addTodo();

  // Add projects
  addProject();

  if (todolist !== null) {
    todolist
      .filter((proj) => proj.name !== "Inbox")
      .map((el) => {
        showProjectInPanel(el);
      });
  }

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

  document.querySelector(".main").addEventListener("click", (e) => {
    // Enable togglePanel at click on button
    if (e.target.closest("#toggPanelBtn")) {
      togglePanel();
    }
  });

  document.querySelector(".tasks-box").addEventListener("click", (e) => {
    // Open and close the dialog for add Todos
    if (e.target.closest(".add")) {
      toggleAddTodoDialog();
    }

    // Shows Inbox todos in main
    if (e.target.closest("#inbox-in-tasks-box")) {
      const projectName = "Inbox";
      showProjectAndTodos(projectName);
    }
  });

  document.querySelector("#addForm").addEventListener("click", (e) => {
    // Set the default date of the date-local field at today as min property
    if (e.target.id === "dueDate") {
      resetCalendar(e);
    }

    if (e.target.closest("#cancel-add")) {
      // Set focus in Inbox when the user cancel in the addTodo form
      document.querySelector("#inbox-in-tasks-box").focus();
     if(todolist !== null){
      showProjectAndTodos(todolist[0].name);
     }
    }
  });

  document
    .querySelector(".menu-element-project")
    .addEventListener("click", (e) => {
      // Open the dialog for add project
      if (e.target.closest("#addProjBtn")) {
        toggleAddProjectDialog();
      }

      // Avtivate dropdown functionality for shows or hides projects in the projects box
      if (e.target.id === "collapseBtn") {
        dropdown(e);
      }
    });

  const projectsParent = document.querySelector(".projects-box");

  projectsParent.addEventListener("click", handleShowChild);

  function handleShowChild(e) {
    if (e.target.closest("#delete-proj-btn")) {
      // delete project
      deleteProject(e);
      document.querySelector(".todos-container").innerHTML = "";
      return;
    }
    showProjectAndTodos(
      e.target.closest(".project-item").children[1].textContent
    );
  }
};

export default initUI;
