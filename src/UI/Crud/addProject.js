import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";
import Project from "../../Models/Project";
import showProjectInPanel from "../Views/showProjectInPanel";

const addProject = () => {
  const addProjectForm = document.querySelector("#add-project-form");
  const name = document.querySelector("#name");
  // Adds new Projects to localStorage
  addProjectForm.addEventListener("submit", () => {
    const newProject = new Project(name.value);
    const parsed = getDataFromLocalStorage();
    parsed.push(newProject);
    saveToLocalStorage(parsed);
    addProjectForm.reset();
    showProjectInPanel(newProject);
  });
};

export default addProject;
