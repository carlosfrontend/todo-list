import { isFuture } from "date-fns";
import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import showTodos from "./showTodos";

const showTodosForNext = () => {
  const todosContainer = document.querySelector(".todos-container");
  let allTodos = [];
  let todolist = getDataFromLocalStorage();
  todolist.map((el) => (allTodos = allTodos.concat(el.todos)));
  const myTodos = allTodos.filter((todo) => isFuture(new Date(todo.dueDate)));
  todosContainer.innerHTML = "";
  showTodos(myTodos, todosContainer);
};

export default showTodosForNext;
