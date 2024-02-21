const toggleEditDialog = () => {
  const dialogEditTask = document.querySelector("#dialog-edit-task");
  const cancelEditButton = document.querySelector("#cancel-edit");
  dialogEditTask.showModal();

  cancelEditButton.addEventListener("click", (e) => {
    document.querySelector("#project_name").setAttribute("selected", "Inbox");
    dialogEditTask.close();
  });
};

export default toggleEditDialog;
