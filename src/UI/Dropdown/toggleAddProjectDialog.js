const toggleAddProjectDialog = () => {
  const projModal = document.querySelector("#dialog-add-project");
  const cancelProjBtn = document.querySelector("#cancel-add-project");
  projModal.showModal();
  cancelProjBtn.addEventListener("click", () => {
    projModal.close();
  });
};

export default toggleAddProjectDialog;
