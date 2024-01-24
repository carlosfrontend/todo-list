import { format } from "date-fns";
const resetCalendar = () => {
  const dueDate = document.querySelector("#dueDate");
  dueDate.setAttribute("min", format(new Date(), "yyyy-MM-d HH:MM"));
};

export default resetCalendar;
