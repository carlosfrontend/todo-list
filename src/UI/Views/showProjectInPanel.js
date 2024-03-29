import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";

const showProjectInPanel = (project) => {
  const projectsBox = document.querySelector(".projects-box");
  const element = document.createElement("button");
  const folderIcon = document.createElement("span");
  const projectText = document.createElement("span");
  const deleteButton = document.createElement("span");
  const counter = document.createElement("span");
  const projectName = document.querySelector("#project_name");
  const option = document.createElement("option");
  option.setAttribute("value", project.name);
  option.textContent = project.name;
  element.classList.add("project-item");
  element.setAttribute("id", project.id);
  folderIcon.classList.add(
    "material-symbols-rounded",
    "project-icon",
    "notranslate"
  );
  folderIcon.textContent = "folder";
  projectText.classList.add("project-txt");
  projectText.textContent = project.name;
  deleteButton.setAttribute("id", "delete-proj-btn");
  deleteButton.classList.add(
    "material-symbols-rounded",
    "project-icon",
    "notranslate"
  );
  deleteButton.textContent = "delete";
  counter.classList.add("counter");
  element.appendChild(folderIcon);
  element.appendChild(projectText);
  element.appendChild(deleteButton);
  element.appendChild(counter);
  projectsBox.appendChild(element);
  projectName.appendChild(option);
  let myItems = [...document.querySelectorAll(".project-item")].filter(
    (item) => item.id !== "inbox-in-projects-box"
  );
  let todolist = getDataFromLocalStorage();
  let myProjects = todolist.filter((el) => el.name !== "Inbox");
  myItems.map(
    (item, index) =>
      (item.children[3].textContent = myProjects[index].todos.length)
  );
};

export default showProjectInPanel;
