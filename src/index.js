import createNewProject from "./Logic/createNewProject";
import createNewTodo from "./Logic/createNewTodo";
import Todo from "./Models/Todo";
import Project from "./Models/Project";
import myProjects from "./Logic/myProjects";
import initUI from "./initUI";

// Starts UI
initUI();


const todo1 = createNewTodo(
  new Todo(
    "First todo",
    "Some description",
    "2024-1-28",
    "high",
    "Some notes",
    'Study'
  )
);

const todo2 = createNewTodo(new Todo(
    "Second todo",
    'Other Description',
    "2024-1-26",
    'low',
))
const proj1 = createNewProject(new Project("Study"));
