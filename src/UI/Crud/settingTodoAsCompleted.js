import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";

const settingTodoAsCompleted = (e) => {
  const todolist = getDataFromLocalStorage();
  if (todolist !== null) {
    const projectName = document
      .querySelector(".my-project")
      .textContent.trim();
    const myProject = todolist.find((project) => project.name === projectName);
    const myTodos = myProject.todos;
    const myTodo = myTodos.filter(
      (todo) => todo.id === e.target.parentElement.parentElement.id
    )[0];

    myTodo.completed === false
      ? (myTodo.completed = true)
      : (myTodo.completed = false);
    saveToLocalStorage(todolist);

    e.target.parentElement.parentElement.classList.toggle("todo-completed-bg");
    e.target.parentElement.parentElement.children[0].classList.toggle("todo-completed-txt");
    e.target.parentElement.parentElement.children[1].classList.toggle("todo-completed-txt");
    e.target.parentElement.parentElement.children[2].classList.toggle("todo-completed-txt");
    e.target.parentElement.parentElement.children[3].classList.toggle("todo-completed-txt");
    e.target.parentElement.parentElement.children[4].classList.toggle("todo-completed-txt");
    
  }
};

export default settingTodoAsCompleted;
