import hidesPanel from "../Panel/hidesPanel";
const toggleAddTaskDialog = () => {
  const add = document.querySelector(".add");
  const dialogAddTask = document.querySelector("#dialog-add-task");
  const cancelAddButton = document.querySelector("#cancel-add");
  add.addEventListener("click", () => {
    if (window.innerWidth <= 700) {
      dialogAddTask.showModal();
      hidesPanel();
    } else {
      dialogAddTask.showModal();
    }
  });

  cancelAddButton.addEventListener("click", () => {
    dialogAddTask.close();
  });
};

export default toggleAddTaskDialog;
