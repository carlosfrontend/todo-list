import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import { isToday } from "date-fns";
import showTodos from "./showTodos";

const showTodosForToday = () => {
  const todosContainer = document.querySelector(".todos-container");
  let allTodos = [];
  let todolist = getDataFromLocalStorage();
  todolist.map((el) => (allTodos = allTodos.concat(el.todos)));

  const myTodos = allTodos.filter((todo) => isToday(new Date(todo.dueDate)));
  todosContainer.innerHTML = "";

  showTodos(myTodos, todosContainer);
};

export default showTodosForToday;
