const Project = function (name) {
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.todos = [];
  };

  export default Project;