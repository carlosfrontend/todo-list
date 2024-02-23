import Todo from "../../Models/Todo";
import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";
import showProjectAndTodos from "../Views/showProjectAndTodos";
import showCounters from "../Views/showCounters";
const addTodo = () => {
  const todoForm = document.querySelector("#addForm");
  todoForm.addEventListener("submit", () => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#dueDate");
    const priority = document.querySelector("#priority");
    const notes = document.querySelector("#notes");
    const projectName = document.querySelector("#project_name");
    const newTodo = new Todo(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      notes.value,
      projectName.value
    );
    const todolist = getDataFromLocalStorage();
    todolist.map((project) => {
      if (project.name === projectName.value) {
        project.todos.push(newTodo);
        saveToLocalStorage(todolist);
        showProjectAndTodos(project.name);
        // Set the focus in .poject-item buttons when one todo is created
        setTimeout(() => {
          if (project.name === "Inbox") {
            document.querySelector("#inbox-in-projects-box").focus();
          }

          const projectItems = [...document.querySelectorAll(".project-item")];
          projectItems.filter((el) => {
            if (el.children[1].textContent === project.name) {
              el.focus();
              const myProjectLength = todolist.find(el => el.name === project.name).todos.length;
              // console.log(myTodosArr)
              // el.children[3].textContent = myProjectLength // Update the counter when a new todo is added
              el.lastChild.innerText = myProjectLength
            }
          });
        }, 0);
      }
    });
    todoForm.reset();
    showCounters();
  });
};

export default addTodo;
