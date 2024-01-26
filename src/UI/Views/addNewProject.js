import createNewProject from "../../Logic/createNewProject";
import myProjects from "../../Logic/myProjects";
import saveProjectsAndTodosToLocalStorage from "../../Logic/saveProjectsAndTodosToLocalStorage";
import Project from "../../Models/Project";
import viewAllProjects from "./viewAllProjects";

const addNewProject = () => {
  const formAddProject = document.querySelector("#add-project-form");
  const projectsBox = document.querySelector(".projects-box");

  formAddProject.addEventListener("submit", () => {
    const name = document.querySelector("#name");
    const newProject = new Project(name.value);
    createNewProject(newProject);
    projectsBox.innerHTML = "";
    formAddProject.reset();
    viewAllProjects()
  });
};

export default addNewProject;
