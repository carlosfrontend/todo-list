import getDataFromLocalStorage from "../../LocalStorage/getDataFromLocalStorage";

const inboxCounter = () => {
let inboxOneCounter = document.querySelector('#inboxCounter');
let inboxTwoCounter = document.querySelector('#inbox-in-projects-box').children[2];
let todolist = getDataFromLocalStorage();
let count = todolist.find(el => el.name === 'Inbox').todos.length;

inboxOneCounter.textContent = count;
inboxTwoCounter.textContent = count;
}

export default inboxCounter;