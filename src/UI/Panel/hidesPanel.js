// Hides the left panel
const hidesPanel = () => {
  const main = document.querySelector(".main");
  const sidebar = document.querySelector(".sidebar");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");

  sidebar.style.display = "none";
  main.style.gridColumn = "1/3";
  toggPanelBtn.textContent = "menu";
  toggPanelBtn.classList.replace('menu-open', 'menu-close');
};

export default hidesPanel;
