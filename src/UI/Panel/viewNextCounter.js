import { format, isFuture } from "date-fns";
import getProyectsAndTodosFromLocalStorage from "../../Logic/getProyectsAndTodosFromLocalStorage";

const viewNextCounter = () => {
  const nextTodos = [];
  const nextCounter = document.querySelector("#nextCounter");
  nextCounter.textContent = 0;
  nextCounter.textContent = 0;
  getProyectsAndTodosFromLocalStorage().map((project) =>
    project.todos.filter((todo) => {
      const due = format(todo.dueDate, "yyyy-MM-d");
      if (isFuture(due)) {
        nextTodos.push(todo);
        nextCounter.textContent = nextTodos.length;
      }
    })
  );
};

export default viewNextCounter;
