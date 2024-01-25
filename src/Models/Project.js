import { v4, v4 as v4uuid } from "uuid";
const Project = function (name) {
  this.id = v4uuid();
  this.name = name;
  this.todos = [];
  this.setTodos = function (todos) {
    this.todos = todos.filter(todo => todo.projectName === this.name);
  };
}

// Project.prototype.



export default Project;
