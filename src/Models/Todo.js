const Todo =  function(title, description, dueDate, priority, notes, projectName){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.projectName = projectName;
    this.completed = false;
}

export default Todo;