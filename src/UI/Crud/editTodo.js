import { format } from "date-fns";
import Todo from "../../Models/Todo";
import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../../LocalStorage/saveToLocalStorage";
import showProjectAndTodos from "../Views/showProjectAndTodos";
import showCounters from "../Views/showCounters";

const editTodo = (e) => {
  const todosContainer = document.querySelector(".todos-container");
  const itemContainer = e.target.closest(".todo-item");
  const itemId = itemContainer.id;
  const cardTitle = itemContainer.children[0].textContent;
  const cardDescription = itemContainer.children[1].textContent;
  const cardDueDate = `${format(
    itemContainer.children[2].textContent,
    "yyyy-MM-dd"
  )}T${format(itemContainer.children[2].textContent, "HH:mm")}`;
  const cardPriority = itemContainer.children[3].children[1].textContent.trim();
  const cardNote = itemContainer.children[4].children[1].textContent;
  const cardCompleted = itemContainer.children[5].children[0].checked; // Boolean value
  const projectOptions = document.querySelector("#project_name").innerHTML;
  const cardProjectName =
    itemContainer.children[6].children[1].textContent.trim();

  // Get data from the card

  document.querySelector("#edit-title").value = cardTitle;
  document.querySelector("#edit-description").value = cardDescription;
  document.querySelector("#edit-dueDate").value = cardDueDate;
  document
    .querySelector("#edit-dueDate")
    .setAttribute("min", format(new Date(), "yyyy-MM-dd HH:MM"));
  document
    .querySelector("#edit-priority")
    .children[0].removeAttribute("selected");
  document.querySelector("#edit-priority").value = cardPriority;
  document
    .querySelector("#edit-priority")
    .setAttribute("selected", cardPriority);
  document.querySelector("#edit-notes").value = cardNote;
  document.querySelector("#isCompleted").value = cardCompleted;
  document
    .querySelector("#isCompleted")
    .setAttribute("selected", cardCompleted);
  document.querySelector("#edit-project_name").innerHTML = projectOptions;
  document.querySelector("#edit-project_name").value = cardProjectName;
  document
    .querySelector("#edit-project_name")
    .setAttribute("selected", cardProjectName);

  const handleEdit = () => {
    const myTitle = document.querySelector("#edit-title").value;
    const myDescription = document.querySelector("#edit-description").value;
    const myDueDate = document.querySelector("#edit-dueDate").value;
    const myPriority = document.querySelector("#edit-priority").value;
    const myNote = document.querySelector("#edit-notes").value;
    const myCompleted = document.querySelector("#isCompleted").value;
    const mySelectedProject =
      document.querySelector("#edit-project_name").value;

    let myTodoObj = new Todo(
      myTitle,
      myDescription,
      myDueDate,
      myPriority,
      myNote,
      mySelectedProject
    );
    myCompleted === "true"
      ? (myTodoObj.completed = true)
      : (myTodoObj.completed = false);

    // Edit a todo in the same project
    if (cardProjectName === myTodoObj.projectName) {
      let todolist = getDataFromLocalStorage();
      let myProject = todolist.find(
        (project) => project.name === cardProjectName
      );

      let mylocalStorageTodoIndex = myProject.todos.findIndex(
        (todo) => todo.id === itemId
      );
      myProject.todos.splice(mylocalStorageTodoIndex, 1, myTodoObj);
      saveToLocalStorage(todolist);
      itemContainer.remove();
      showProjectAndTodos(cardProjectName);
      const projectItems = [...document.querySelectorAll(".project-item")];
      projectItems.map((el) => {
        if (el.children[1].textContent.trim() === cardProjectName) {
          setTimeout(() => {
            el.focus();
          }, 0);
        }
      });
    } else {
      // Moves a todo to other project
      let todolist = getDataFromLocalStorage();
      let projectTarjet = todolist.find(
        (project) => project.name === myTodoObj.projectName
      );
      let actualProject = todolist.find(
        (project) => project.name === cardProjectName
      );
      let actualIndex = actualProject.todos.findIndex(
        (todo) => todo.id === itemId
      );
      actualProject.todos.splice(actualIndex, 1);
      projectTarjet.todos.push(myTodoObj);
      saveToLocalStorage(todolist);
      itemContainer.remove();
      showProjectAndTodos(myTodoObj.projectName);
      const projectItems = [...document.querySelectorAll(".project-item")];
      projectItems.map((el) => {
        if (el.children[1].textContent.trim() === myTodoObj.projectName) {
          setTimeout(() => {
            el.focus();
          }, 0);
        }
      });
    }
    showCounters();
  };

  document
    .querySelector("#editForm")
    .addEventListener("submit", handleEdit, { once: true });
};

export default editTodo;
