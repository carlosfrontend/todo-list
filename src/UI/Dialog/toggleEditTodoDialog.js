const toggleEditDialog = () => {
  const dialogEditTask = document.querySelector("#dialog-edit-task");
  const cancelEditButton = document.querySelector("#cancel-edit");
  dialogEditTask.showModal();

  cancelEditButton.addEventListener("click", (e) => {
    const editOptions = [...document.querySelector("#edit-project_name")];
    dialogEditTask.close();
    editOptions.forEach(
      (opt, index) => (document.querySelector("#project_name")[index] = opt)
    );
    document.querySelector("#project_name").value = "Inbox";
  });
};

export default toggleEditDialog;
