const saveProjectsAndTodosToLocalStorage = (projects) => {
    const todoList = localStorage.setItem("TodoList", JSON.stringify(projects));
}

export default saveProjectsAndTodosToLocalStorage;