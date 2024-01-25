const getProyectsAndTodosFromLocalStorage = () => {
  const todoList = JSON.parse(localStorage.getItem("TodoList"));
  return todoList;
};

export default getProyectsAndTodosFromLocalStorage;
