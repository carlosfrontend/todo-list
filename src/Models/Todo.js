import Project from "./Project";

const Todo = function(title, description, dueDate, priority, projectName = 'Default Project'){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectName = projectName;
}

export default Todo;