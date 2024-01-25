import myProjects from "./myProjects";
import myTodos from './myTodos'

const saveProjectsAndTodosToLocalStorage = () => {
    const todoList = localStorage.setItem("TodoList", JSON.stringify(myProjects));
}

export default saveProjectsAndTodosToLocalStorage;