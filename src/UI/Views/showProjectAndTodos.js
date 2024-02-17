import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";
import {format} from 'date-fns';

const showProjectAndTodos = (proj) => {
  const todosContainer = document.querySelector(".todos-container");
  todosContainer.innerHTML = "";
  const todolist = getDataFromLocalStorage();
  const myProject = todolist.filter((list) => list.name === proj)[0];
  const myTodos = myProject.todos;
  myTodos.map((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.setAttribute("id", todo.id);
    const todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoTitle.classList.add("todo-title");
    const todoDesciption = document.createElement("p");
    todoDesciption.classList.add("todo-description");
    todoDesciption.textContent = todo.description;
    const todoDueDate = document.createElement("div");
    todoDueDate.classList.add("todo-duedate");
    const spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:";
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.textContent = " " + format(todo.dueDate, "MMMM dd y hh:mm");
    const todoPriority = document.createElement("div");
    const spanPriority = document.createElement("span");
    const priority = document.createElement("span");
    const notes = document.createElement("div");
    const notesTitle = document.createElement("span");
    const note = document.createElement("p");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.completed;
    input.checked === true
      ? todoItem.classList.add("todo-completed-bg")
      : todoItem.classList.remove("todo-completed-bg");

    input.checked === true
      ? todoTitle.classList.add("todo-completed-txt")
      : todoTitle.classList.remove("todo-completed-txt");
    input.checked === true
      ? todoDesciption.classList.add("todo-completed-txt")
      : todoDesciption.classList.remove("todo-completed-txt");
    input.checked === true
      ? todoDueDate.classList.add("todo-completed-txt")
      : todoDueDate.classList.remove("todo-completed-txt");
    input.checked === true
      ? todoPriority.classList.add("todo-completed-txt")
      : todoPriority.classList.remove("todo-completed-txt");

    input.checked === true
      ? notes.classList.add("todo-completed-txt")
      : notes.classList.remove("todo-completed-txt");

    input.classList.add("completed");
    label.classList.add("completed-label");
    label.textContent = "Completed";
    note.classList.add("note");
    note.textContent = todo.notes;
    notesTitle.classList.add("notes-title");
    notesTitle.textContent = "Notes:";
    notes.classList.add("notes");
    priority.classList.add("priority");
    priority.textContent = " " + todo.priority;
    spanPriority.textContent = "Priority:";
    todoPriority.classList.add("todo-priority");
    todoPriority.appendChild(spanPriority);
    todoPriority.appendChild(priority);
    todoDueDate.appendChild(spanDueDate);
    todoDueDate.appendChild(dueDate);
    notes.appendChild(notesTitle);
    notes.appendChild(note);
    label.appendChild(input);
    const projectNameTitle = document.createElement("div");
    projectNameTitle.classList.add("project-name-title");
    const projectLogo = document.createElement("span");
    projectLogo.classList.add(
      "material-symbols-rounded",
      "project-logo",
      "notranslate"
    );
    projectLogo.textContent = "numbers";
    projectNameTitle.appendChild(projectLogo);
    const myProject = document.createElement("span");
    myProject.classList.add("my-project");
    myProject.textContent = " " + todo.projectName;
    projectNameTitle.appendChild(myProject);
    const todoButtons = document.createElement("div");
    todoButtons.classList.add("todo-buttons");
    const editButton = document.createElement("button");
    const editLogo = document.createElement("span");
    editLogo.classList.add(
      "material-symbols-rounded",
      "edit-logo",
      "notranslate"
    );
    editLogo.textContent = "edit";
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    editButton.appendChild(editLogo);
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    const deleteLogo = document.createElement("span");
    deleteLogo.classList.add(
      "material-symbols-rounded",
      "delete-logo",
      "notranslate"
    );
    deleteLogo.textContent = "delete";
    deleteButton.appendChild(deleteLogo);
    todoButtons.appendChild(editButton);
    todoButtons.appendChild(deleteButton);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDesciption);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoPriority);
    todoItem.appendChild(notes);
    todoItem.appendChild(label);
    todoItem.appendChild(projectNameTitle);
    todoItem.appendChild(todoButtons);
    todosContainer.appendChild(todoItem);
  });
};

export default showProjectAndTodos;
