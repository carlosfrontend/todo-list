const dropdown = (e) => {
  const projectsBox = document.querySelector(".projects-box");
  e.target.textContent === "expand_less"
    ? (e.target.textContent = "expand_more")
    : (e.target.textContent = "expand_less");
  e.target.textContent === "expand_less"
    ? (projectsBox.style.display = "none")
    : (projectsBox.style.display = "block");
};

export default dropdown;
