import initUI from "./initUI";
// Starts UI
initUI();

const addProjectForm = document.querySelector("#add-project-form");
const createProject = (name) => {
  const id = self.crypto.randomUUID();
  const todos = [];
  return { id, name, todos };
};
let myProjects = [];



console.log(JSON.parse(localStorage.getItem("todolist")) === null)

if (JSON.parse(localStorage.getItem("todolist")) === null) {
   
  myProjects = [createProject("Inbox")];
  localStorage.setItem("todolist", JSON.stringify(myProjects));
} else {
    const handleProjectForm = () => {
        const name = document.querySelector("#name");
        const newProject = createProject(name.value);
        let parsed = JSON.parse(localStorage.getItem("todolist"));
        parsed.push(newProject);
        localStorage.setItem("todolist", JSON.stringify(parsed));
        addProjectForm.reset();
      };
      addProjectForm.addEventListener("submit", handleProjectForm);
    }
