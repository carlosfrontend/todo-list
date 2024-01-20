function handlePanel() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");
  toggPanelBtn.classList.toggle("menu-open");
  toggPanelBtn.classList.toggle("menu-close");
  toggPanelBtn.textContent === "menu_open"
    ? (toggPanelBtn.textContent = "menu")
    : (toggPanelBtn.textContent = "menu_open");
  if (toggPanelBtn.textContent === "menu_open") {
    sidebar.style.display = "grid";
    main.style.gridColumn = "2/3";
  } else {
    sidebar.style.display = "none";
    main.style.gridColumn = "1/3";
  }
}

export function togglePanel() {
  toggPanelBtn.addEventListener("click", handlePanel);
}
