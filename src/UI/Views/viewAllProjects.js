import getProyectsAndTodosFromLocalStorage from "../../Logic/getProyectsAndTodosFromLocalStorage";

const viewAllProjects = () => {
  const projectBox = document.querySelector(".projects-box");

  getProyectsAndTodosFromLocalStorage().map((proj) => {
    const projectItem = document.createElement("button");
    const projectText = document.createElement("span");
    const folderIcon = document.createElement("span");
    const deleteProjBtn = document.createElement("span");
    const counter = document.createElement("span");
    folderIcon.classList.add(
      "material-symbols-rounded",
      "project-icon",
      "notranslate"
    );
    projectText.classList.add("project-txt");
    deleteProjBtn.setAttribute("id", "delete-proj-btn");
    projectText.textContent = proj.name;
    folderIcon.textContent = "folder";
    deleteProjBtn.classList.add(
      "material-symbols-rounded",
      "project-icon",
      "notranslate"
    );
    deleteProjBtn.textContent = "delete";
    counter.classList.add("counter");
    counter.textContent = proj.todos.length;
    projectItem.appendChild(folderIcon);
    projectItem.appendChild(projectText);
    projectItem.appendChild(deleteProjBtn);
    projectItem.appendChild(counter);
    projectItem.setAttribute("type", "button");
    projectItem.classList.add("project-item");
    projectBox.appendChild(projectItem);
  });
};

export default viewAllProjects;
