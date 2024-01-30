import toggleFolderIcon from "../Dropdown/toggleFolderIcon";
const showProject = (project) => {
  const projectsBox = document.querySelector(".projects-box");
  const element = document.createElement("button");
  const folderIcon = document.createElement("span");
  const projectText = document.createElement("span");
  const deleteButton = document.createElement("span");
  const counter = document.createElement("span");
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
};

export default showProject;
