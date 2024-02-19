import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import Todo from "../../Models/Todo";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";
import showProjectAndTodos from "../Views/showProjectAndTodos";

const editTodo = (e) => {
  let todolist = getDataFromLocalStorage();
  const todoItemContainer = e.target.closest(".todo-item");
  const projectName = todoItemContainer.childNodes[6].childNodes[1].innerText;
  const addOptions = [
    ...document.querySelector("#project_name").children,
  ].slice();
  let todos = todolist.find((el) => el.name === projectName).todos;
  let myTodo = todos.find((todo) => todo.id === todoItemContainer.id);
  document.querySelector("#edit-title").value = myTodo.title;
  document.querySelector("#edit-description").value = myTodo.description;
  document.querySelector("#edit-dueDate").value = myTodo.dueDate;
  document.querySelector("#edit-priority").value = myTodo.priority;
  document.querySelector("#edit-notes").value = myTodo.notes;
  document.querySelector("#isCompleted").value = myTodo.completed;
  addOptions.forEach(
    (opt, index) =>
      (document.querySelector("#edit-project_name")[index] = addOptions[index])
  );
  document.querySelector("#edit-project_name").value = myTodo.projectName;

  document.getElementById("editForm").addEventListener("submit", (e) => {
    const myTitle = document.querySelector("#edit-title").value;
    const myDescription = document.querySelector("#edit-description").value;
    const myDueDate = document.querySelector("#edit-dueDate").value;
    const myPriority = document.querySelector("#edit-priority").value;
    const myNotes = document.querySelector("#edit-notes").value;
    const myProjectName = document.querySelector("#edit-project_name").value;

    myTodo = new Todo(
      myTitle,
      myDescription,
      myDueDate,
      myPriority,
      myNotes,
      myProjectName
    );
    const boolString = document.querySelector("#isCompleted").value;
    const boolValue = boolString === "true";
    myTodo.completed = boolValue;
    if (myTodo.projectName === projectName) {
      const myIndex = todos.findIndex(
        (todo) => todo.id === todoItemContainer.id
      );
      todos[myIndex] = myTodo;
      saveToLocalStorage(todolist);
      showProjectAndTodos(myTodo.projectName);
    } else {
      // Removes the todo of the project
      todos.splice(todos.findIndex((todo) => todo.id === todoItemContainer.id));
      const selectedTodos = todolist.find(
        (el) => el.name === myTodo.projectName
      ).todos;
      // Moves the todo at the new Project
      selectedTodos.push(myTodo);
      saveToLocalStorage(todolist);
      showProjectAndTodos(myTodo.projectName);
      const myProjects = [...document.querySelectorAll(".project-item")];
      myProjects.map((el) => {
        if (el.children[1].textContent === myTodo.projectName) {
          setTimeout(() => {
            el.focus();
          }, 0);
        }
      });
      addOptions.forEach(
        (opt, index) =>
          (document.querySelector("#project_name")[index] = addOptions[index])
      );
    }
  });
};

export default editTodo;
