const deleteProject = () => {
  const deleteProjectButton = [
    ...document.querySelectorAll("#delete-proj-btn"),
  ];
  deleteProjectButton.map((el) =>
    el.addEventListener("click", (e) => {
      const parsed = JSON.parse(localStorage.getItem("todolist"));
      const myHtmlItem = e.target.parentElement;
      const id = myHtmlItem.id;
      parsed.map((el, index) => {
        if (el.id === id) {
          parsed.splice(index, 1);
          localStorage.setItem("todolist", JSON.stringify(parsed));
          myHtmlItem.remove();
        }
      });
    })
  );
};

export default deleteProject;
