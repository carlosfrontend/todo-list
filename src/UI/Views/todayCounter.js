import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import { isToday } from "date-fns";

const todayCounter = () => {
  let todayCounter = document.querySelector("#todayCounter");
  let todayTodos = [];
  let todolist = getDataFromLocalStorage();
  todolist.map((el) => (todayTodos = todayTodos.concat(el.todos)));
  const myTodos = todayTodos.filter((todo) => isToday(new Date(todo.dueDate)));
  todayCounter.textContent = myTodos.length;
};

export default todayCounter;
