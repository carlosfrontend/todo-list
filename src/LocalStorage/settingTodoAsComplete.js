
const settingTodoAsComplete = (todo) => {
  todo.completed = false ? todo.completed = true : todo.completed === false;
};

export default settingTodoAsComplete;
