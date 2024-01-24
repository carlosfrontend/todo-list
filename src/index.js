import createNewProject from "./Logic/createNewProject";
import createNewTodo from "./Logic/createNewTodo";
import myProjects from "./Logic/myProjects";
import myTodos from "./Logic/myTodos";
import updateStorage from "./Logic/updateStorage";
import Project from "./Models/Project";
import Todo from "./Models/Todo";
import initUI from "./initUI";

updateStorage(); // Update Storage to []

// Starts UI
initUI();

// Projects

// Set a default Project
const defaultProject = createNewProject(new Project("Inbox"));
const project1 = createNewProject(new Project("Study"));
const project2 = createNewProject(new Project("Work"));
// Tasks

const task1 = createNewTodo(
  new Todo(
    "My first todo",
    "This is a todo",
    new Date("2025-10-2"),
    "low",
    'Some notes',
    "Study"
  )
);
const task2 = createNewTodo(
  new Todo("Other todo", "My second todo", new Date("2024-1-30"), "high",'Some notes')
);

const task3 = createNewTodo(
  new Todo(
    "Estudiar matemáticas",
    "Debo estudiar para el examen",
    new Date("2024-3-15"),
    "medium",
    'Some notes',
    "Study"
  )
);

const task4 = createNewTodo(new Todo('Levantarme temprano', 'Debo ir al trabajo', new Date('2024-1-24'),'high','Some notes', 'Work'))

defaultProject.setTodos(myTodos);
project1.setTodos(myTodos);
project2.setTodos(myTodos);



console.log(myTodos);
console.log(myProjects);

updateStorage() // Update storage with projects and todos
