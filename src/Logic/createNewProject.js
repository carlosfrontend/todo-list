import myProjects from "./myProjects";
import myTodos from "./myTodos";
import saveProjectsAndTodosToLocalStorage from "./saveProjectsAndTodosToLocalStorage";

const createNewProject = function (project) {
  myProjects.push(project);
  myProjects.map((proj) => proj.setTodos(myTodos)); // Adds todos to every project
  saveProjectsAndTodosToLocalStorage(myProjects);
  return project;
};

export default createNewProject;
