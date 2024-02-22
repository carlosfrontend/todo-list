import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import { isFuture } from "date-fns";
const nextCounter = () => {
    let nextCounter = document.querySelector("#nextCounter");
    let nextTodos = [];
    let todolist = getDataFromLocalStorage();
    todolist.map((el) => (nextTodos = nextTodos.concat(el.todos)));
    const myTodos = nextTodos.filter((todo) =>
      isFuture(new Date(todo.dueDate))
    );
    nextCounter.textContent = myTodos.length;
}

export default nextCounter;