import Project from "../../Models/Project";
import showProjectInPanel from "../Views/showProjectInPanel";

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
    showProjectInPanel(newProject);
  });
};

export default addProject;
