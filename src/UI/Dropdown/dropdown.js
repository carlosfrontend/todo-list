const dropdown = () => {
  const collapseBtn = document.querySelector("#collapseBtn");
  const projectsBox = document.querySelector(".projects-box");
  collapseBtn.addEventListener("click", () => {
    collapseBtn.textContent === "expand_less"
      ? (collapseBtn.textContent = "expand_more")
      : (collapseBtn.textContent = "expand_less");
    collapseBtn.textContent === "expand_less"
      ? (projectsBox.style.display = "none")
      : (projectsBox.style.display = "block");
  });
};

export default dropdown;
