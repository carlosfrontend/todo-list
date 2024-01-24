import myTodos from "../Logic/myTodos";

const Project = function (name) {
  this.name = name;
  this.todos = [];
};

Project.prototype.setTodos = function (todos) {
  this.todos = todos.filter(todo => todo.projectName === this.name);
};



export default Project;
