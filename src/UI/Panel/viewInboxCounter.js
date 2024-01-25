import getProyectsAndTodosFromLocalStorage from "../../Logic/getProyectsAndTodosFromLocalStorage";

const viewInboxCounter = () => {
  const inboxCounter = document.querySelector("#inboxCounter");
  const inbox = getProyectsAndTodosFromLocalStorage().filter(
    (project) => project.name === "Inbox"
  );
  for (let i = 0; i < inbox.length; i++) {
    inboxCounter.textContent = inbox[i].todos.length;
  }
};

export default viewInboxCounter;
