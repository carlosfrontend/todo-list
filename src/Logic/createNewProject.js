import myProjects from "./myProjects";

const createNewProject = function (project) {
  myProjects.push(project);
  return project;
};

export default createNewProject;
