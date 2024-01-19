export default function togglePanel() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
      sidebar.style.display = "none";
      main.style.gridColumn = "1/3";
    } else {
      sidebar.style.display = "block";
      main.style.gridColumn = "2/3";
    }
  });
  function handlePanel() {
    toggPanelBtn.classList.toggle("menu-open");
    toggPanelBtn.classList.toggle("menu-close");
    toggPanelBtn.textContent === "menu_open"
      ? (toggPanelBtn.textContent = "menu")
      : (toggPanelBtn.textContent = "menu_open");
    if (toggPanelBtn.textContent === "menu_open") {
      sidebar.style.display = "block";
      main.style.gridColumn = "2/3";
    } else {
      sidebar.style.display = "none";
      main.style.gridColumn = "1/3";
    }
  }
  toggPanelBtn.addEventListener("click", handlePanel);
}
