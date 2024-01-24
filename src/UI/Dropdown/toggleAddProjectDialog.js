const toggleAddProjectDialog = () => {
  const projModal = document.querySelector("#dialog-add-project");
  const addProjBtn = document.querySelector("#addProjBtn");
  const cancelProjBtn = document.querySelector("#cancel-add-project");
  addProjBtn.addEventListener('click', () => {
    projModal.showModal();
  });
  cancelProjBtn.addEventListener('click', () => {
    projModal.close();
  })
};

export default toggleAddProjectDialog;
