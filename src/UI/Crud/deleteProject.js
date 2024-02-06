import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";

const deleteProject = (e) => {
  
    const projectName = document.querySelector("#project_name");
    // Delete projects from localStorage
    const parsed = getDataFromLocalStorage();
    const myHtmlItem = e.target.closest(".project-item");
    const id = myHtmlItem.id;
    parsed.map((el, index) => {
      if (el.id === id) {
        parsed.splice(index, 1);
        saveToLocalStorage(parsed)
        myHtmlItem.remove();
        const projectsAfterRemove = getDataFromLocalStorage();
        projectName.innerHTML = "";
        projectsAfterRemove.map((el) => {
          const option = document.createElement("option");
          option.setAttribute("value", el.name);
          option.textContent = el.name;
          projectName.appendChild(option);
        });
      }
    });
  
};
export default deleteProject;
