import { format, isTomorrow } from "date-fns";
import getProyectsAndTodosFromLocalStorage from "../../Logic/getProyectsAndTodosFromLocalStorage";
const viewTomorrowCounter = () => {
  const tomorrowTodos = [];
  const tomorrowCounter = document.querySelector("#tomorrowCounter");
  tomorrowCounter.textContent = 0;
  getProyectsAndTodosFromLocalStorage().map((project) =>
    project.todos.filter((todo) => {
      const due = format(todo.dueDate, "yyyy-MM-d");
      if (isTomorrow(due)) {
        tomorrowTodos.push(todo);
        tomorrowCounter.textContent = tomorrowTodos.length;
      }
    })
  );
};

export default viewTomorrowCounter;
