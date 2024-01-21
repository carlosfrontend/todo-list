const todoListDB = () => {
  const myTasks = [];
  const myProjects = [];

  localStorage.setItem("myTasks", JSON.stringify(myTasks));
  localStorage.setItem("myProjects", JSON.stringify(myProjects));
};

export default todoListDB;
