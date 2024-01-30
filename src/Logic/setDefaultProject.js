import Project from "../Models/Project";
const setDefaultProject = () => {
  // Set default project in locaStorage

  if (JSON.parse(localStorage.getItem("todolist")) === null) {
    localStorage.setItem("todolist", JSON.stringify([]));
    const defaultproject = new Project("Inbox");
    const parsed = JSON.parse(localStorage.getItem("todolist"));
    parsed.push(defaultproject);
    localStorage.setItem("todolist", JSON.stringify(parsed));
  }
};

export default setDefaultProject;
