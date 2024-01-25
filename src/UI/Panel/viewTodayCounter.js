import myProjects from "../../Logic/myProjects";
import { format, isToday } from "date-fns";

const viewTodayCounter = () => {
  const today = [];
  const todayCounter = document.querySelector("#todayCounter");
  myProjects.map((project) =>
    project.todos.filter((todo, index) => {
      const due = format(todo.dueDate, "yyyy-MM-d");
      if (isToday(due)) {
        today.push(todo);
        todayCounter.textContent = today.length;
      }
    })
  );
};

export default viewTodayCounter;
