import { v4, v4 as v4uuid } from "uuid";
const Project = function (name) {
  this.id = v4uuid();
  this.name = name;
  this.todos = [];
};

Project.prototype.setTodos = function (todos) {
  this.todos = todos.filter(todo => todo.projectName === this.name);
};



export default Project;
