import createNewProject from "./Logic/createNewProject";
import createNewTodo from "./Logic/createNewTodo";
import Todo from "./Models/Todo";
import Project from "./Models/Project";
import myProjects from "./Logic/myProjects";
import initUI from "./initUI";
import { add } from "date-fns";
import addNewProject from "./UI/Views/addNewProject";
import viewAllProjects from "./UI/Views/viewAllProjects";
import saveProjectsAndTodosToLocalStorage from "./Logic/saveProjectsAndTodosToLocalStorage";
import createDefaultProject from "./Logic/createDefaultProject";

// Starts UI
initUI();

/* const todo1 = createNewTodo(
  new Todo(
    "First todo",
    "Some description",
    "2024-1-28",
    "high",
    "Some notes",
    'Study'
    )
    ); */

/* const todo2 = createNewTodo(new Todo(
      "Second todo",
      'Other Description',
      "2024-1-26",
      'low',
      )) */

createDefaultProject();
const newProject = addNewProject();
