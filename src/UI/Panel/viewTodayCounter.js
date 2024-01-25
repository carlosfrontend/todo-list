import { format, isToday } from "date-fns";
import getProyectsAndTodosFromLocalStorage from "../../Logic/getProyectsAndTodosFromLocalStorage";

const viewTodayCounter = () => {
  const todayTodos = [];
  const todayCounter = document.querySelector("#todayCounter");
  todayCounter.textContent = 0;
  getProyectsAndTodosFromLocalStorage().map((project) =>
    project.todos.filter((todo) => {
      const due = format(todo.dueDate, "yyyy-MM-d");
      if (isToday(due)) {
        todayTodos.push(todo);
        todayCounter.textContent = todayTodos.length;
      }
    })
  );
};

export default viewTodayCounter;
