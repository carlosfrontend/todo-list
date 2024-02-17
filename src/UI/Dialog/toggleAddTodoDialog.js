const toggleAddTodoDialog = () => {
  const dialogAddTask = document.querySelector("#dialog-add-task");
  const cancelAddButton = document.querySelector("#cancel-add");
  dialogAddTask.showModal();

  cancelAddButton.addEventListener("click", () => {
    dialogAddTask.close();
  });
};

export default toggleAddTodoDialog;
