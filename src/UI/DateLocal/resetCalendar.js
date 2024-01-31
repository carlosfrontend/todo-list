import { format } from "date-fns";
const resetCalendar = (e) => {
  e.target.setAttribute("min", format(new Date(), "yyyy-MM-d HH:MM"));
};

export default resetCalendar;
