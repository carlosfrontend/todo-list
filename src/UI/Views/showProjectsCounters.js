import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";

const showProjectCounters = (items) => {
  document.addEventListener("DOMContentLoaded", () => {
    let projectItemsWithInbox = [
      ...document.getElementsByClassName("project-item"),
    ];
    let myProjectItems = projectItemsWithInbox.filter(
      (el) => el.children[1].textContent !== "Inbox"
    );
    let myCounters = myProjectItems.map((el) => el.children[3]);
    let todolist = getDataFromLocalStorage();
    const myProjects = todolist.filter((project) => project.name !== "Inbox");
    myProjects.forEach(
      (el, index) => (myCounters[index].textContent = el.todos.length)
    );
  });
};

export default showProjectCounters;
