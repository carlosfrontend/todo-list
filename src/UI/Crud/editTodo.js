import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";

const editTodo = (e) => {
  const todolist = getDataFromLocalStorage();
  let todoItemContainer = e.target.parentElement.parentElement;
  let projectName = (e.target.parentNode.parentNode.children[6].children[1].textContent).trim();
  const addOptions = [...document.querySelector("#project_name").children].slice();
  let todos = todolist.find((el) => el.name === projectName).todos;
  const myTodo = todos.find((todo) => todo.id === todoItemContainer.id);
  console.log(myTodo);
  document.querySelector("#edit-title").value = myTodo.title;
  document.querySelector("#edit-description").value = myTodo.description;
  document.querySelector("#edit-dueDate").value = myTodo.dueDate;
  document.querySelector("#edit-priority").value = myTodo.priority;
  document.querySelector("#edit-notes").value = myTodo.notes;
  addOptions.forEach(
    (opt, index) =>
    (document.querySelector("#edit-project_name")[index] = addOptions[index])
    );
  document.querySelector("#edit-project_name").value = myTodo.projectName;
};

export default editTodo;
