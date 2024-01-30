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
import setDefaultProject from "./Logic/setDefaultProject";
import addProject from "./UI/Crud/addProject";
import showProject from "./UI/Views/showProject";
import deleteProject from "./UI/Crud/deleteProject";

const initUI = () => {
  const main = document.querySelector(".main");
  const myLogo = document.querySelector(".logo");

  // Injects the main Logo
  myLogo.src = logoImg;
  myLogo.alt = "Todo List Logo";

  // Change the sidebar open and close icons when the DOM is loaded in function of the window width
  togglePanelIcons();
  // Toggle Projects dropdown menu
  dropdown();
  // Open the add project dialog
  toggleAddProjectDialog();
  // Set the default date of the date-local field at today as min property
  resetCalendar();
  toggleFolderIcon();
  // Toggle the Panel at click on panel button
  togglePanel();
  // Toggle Add Task dialog
  toggleAddTaskDialog();

  main.appendChild(notYetTasks());
  // Change the sidebar open and close icons when the window is resized in function of the window width
  window.addEventListener("resize", () => {
    togglePanelIcons();
  });
 
  setDefaultProject();
  addProject();
  if(JSON.parse(localStorage.getItem('todolist')) !== null){
    const parsed = JSON.parse(localStorage.getItem('todolist'));
    parsed.filter(proj => proj.name !== 'Inbox').map(el => showProject(el))
  }  
  deleteProject();
};

export default initUI;
