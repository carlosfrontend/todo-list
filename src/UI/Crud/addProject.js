import { Notify } from "notiflix/build/notiflix-notify-aio";
import Project from "../../Models/Project";
import showProject from "../Views/showProject";
import hidesPanel from "../Panel/hidesPanel";
const addProject = () => {
  const addProjectForm = document.querySelector("#add-project-form");
  const name = document.querySelector("#name");
  // Adds new Projects to localStorage
  addProjectForm.addEventListener("submit", () => {
    const newProject = new Project(name.value);
    const parsed = JSON.parse(localStorage.getItem("todolist"));
    parsed.push(newProject);
    localStorage.setItem("todolist", JSON.stringify(parsed));
    addProjectForm.reset();
    showProject(newProject);
    if(window.innerWidth <= 700){
      setTimeout(() => {
        hidesPanel();
        Notify.success(`Project ${newProject.name.toUpperCase()} successfully added!`);
      }, 800);
    }else{
      Notify.success(`Project ${newProject.name.toUpperCase()} successfully added!`);
    }
  });
};

export default addProject;
