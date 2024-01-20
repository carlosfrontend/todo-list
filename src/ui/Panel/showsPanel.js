// Shows the left panel
const showsPanel = () => {
  const main = document.querySelector(".main");
  const sidebar = document.querySelector(".sidebar");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");

  sidebar.style.display = "grid";
  main.style.gridColumn = "2/3";
  toggPanelBtn.textContent = 'menu_open';
  toggPanelBtn.classList.replace('menu-close', 'menu-open');
};

export default showsPanel;
