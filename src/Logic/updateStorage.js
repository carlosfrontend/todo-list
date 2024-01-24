import myProjects from "./myProjects";

const sendToLocalStorage = () => {
  localStorage.setItem("TodoList", JSON.stringify(myProjects));
};

export default sendToLocalStorage;
