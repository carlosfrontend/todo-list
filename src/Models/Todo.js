import { v4, v4 as v4uuid } from "uuid";
const Todo = function (
  title,
  description,
  dueDate,
  priority,
  notes,
  projectName = "Inbox"
) {
  this.id = v4uuid();
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.projectName = projectName;
  this.completed = false;
};

export default Todo;
