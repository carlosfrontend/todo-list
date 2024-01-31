const deleteProject = () => {
  document.querySelector(".projects-box").addEventListener("click", (e) => {
    const projectName = document.querySelector("#project_name");
    if (e.target.textContent !== "delete") return;
    // Delete projects from localStorage
    const parsed = JSON.parse(localStorage.getItem("todolist"));
    const myHtmlItem = e.target.closest(".project-item");
    const id = myHtmlItem.id;
    parsed.map((el, index) => {
      if (el.id === id) {
        parsed.splice(index, 1);
        localStorage.setItem("todolist", JSON.stringify(parsed));
        myHtmlItem.remove();
        const projectsAfterRemove = JSON.parse(
          localStorage.getItem("todolist")
        );
        projectName.innerHTML = "";
        projectsAfterRemove.map((el) => {
          const option = document.createElement("option");
          option.setAttribute("value", el.name);
          option.textContent = el.name;
          projectName.appendChild(option);
        });
      }
    });
  });
};
export default deleteProject;
