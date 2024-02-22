import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import showTodos from "./showTodos";

const showProjectAndTodos = (proj) => {
  const todosContainer = document.querySelector(".todos-container");
  todosContainer.innerHTML = "";
  const todolist = getDataFromLocalStorage();
  const myProject = todolist.filter((list) => list.name === proj)[0];
  const myTodos = myProject.todos;
  showTodos(myTodos, todosContainer);
};

export default showProjectAndTodos;