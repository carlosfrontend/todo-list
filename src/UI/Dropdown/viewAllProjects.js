import myProjects from "../../Logic/myProjects";

const viewAllProjects = () => {
  for (let project of myProjects) {
    const projectsBox = document.querySelector(".projects-box");
    const element = document.createElement("button");
    const projectIcon = document.createElement("span");
    const projectTxt = document.createElement("span");
    const deleteProjBtn = document.createElement("span");
    const counter = document.createElement("span");
    element.setAttribute("type", "button");
    element.classList.add("project-item");
    projectIcon.classList.add(
      "material-symbols-rounded",
      "project-icon",
      "notranslate"
    );
    projectIcon.textContent = "folder";
    projectTxt.classList.add("project-txt");
    projectTxt.textContent = `${project.name}`;
    deleteProjBtn.setAttribute("id", "delete-proj-btn");
    deleteProjBtn.classList.add(
        "material-symbols-rounded",
        "project-icon",
        "notranslate"
      );
    deleteProjBtn.textContent = "delete";
    counter.classList.add("counter");
    counter.textContent = `${project.todos.length}`;
    element.appendChild(projectIcon);
    element.appendChild(projectTxt);
    if (project.name !== "Inbox") {
      element.appendChild(deleteProjBtn);
    }
    element.appendChild(counter);
    projectsBox.appendChild(element);
  }
};

export default viewAllProjects;
