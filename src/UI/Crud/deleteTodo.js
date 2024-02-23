import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";
import showCounters from "../Views/showCounters";
import showProjectAndTodos from "../Views/showProjectAndTodos";

const deleteTodo = (e) => {
  const todolist = getDataFromLocalStorage();
  const todoItemContainer = e.target.closest(".todo-item");
  const projectName = todoItemContainer
    .querySelector(".my-project")
    .textContent.trim();
  const myProject = todolist.find((project) => project.name === projectName);
  let myTodos = myProject.todos;
  if (todolist !== null) {
    const myTodoIndex = myTodos.findIndex(
      (todo) => todo.id === todoItemContainer.id
    );

    myTodos.splice(myTodoIndex, 1); // Remove the todo in localStorage
    saveToLocalStorage(todolist);
    showProjectAndTodos(projectName);
    const myItems = [...document.querySelectorAll(".project-item")];
    const myItem = myItems.find(
      (el) => el.children[1].textContent === projectName
    );
    const myTodosArr = todolist.find((el) => el.name === projectName);
    myItem.lastChild.innerText = myTodosArr.todos.length;
  }
  showCounters();
};

export default deleteTodo;
