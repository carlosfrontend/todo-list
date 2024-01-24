import myTodos from "./myTodos";

const createNewTodo = function (todo) {
  myTodos.push(todo);
  return todo;
};

export default createNewTodo;
