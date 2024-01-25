import myProjects from "../../Logic/myProjects";

const viewInboxCounter = () => {
const inboxCounter = document.querySelector('#inboxCounter');
inboxCounter.textContent = myProjects[0].todos.length;
}

export default viewInboxCounter;