import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import { isTomorrow } from "date-fns";

const tomorrowCounter = () => {
  let tomorrowCounter = document.querySelector("#tomorrowCounter");
  let tomorrowTodos = [];
  let todolist = getDataFromLocalStorage();
  todolist.map((el) => (tomorrowTodos = tomorrowTodos.concat(el.todos)));
  const myTodos = tomorrowTodos.filter((todo) =>
    isTomorrow(new Date(todo.dueDate))
  );
  tomorrowCounter.textContent = myTodos.length;
};

export default tomorrowCounter;
