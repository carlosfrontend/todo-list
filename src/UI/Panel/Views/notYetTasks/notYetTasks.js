const notYetTasks = () => {
  const element = document.createElement("h1");
  element.textContent = "No yet Tasks !";
  element.classList.add("noyet");
  return element;
};

export default notYetTasks;
