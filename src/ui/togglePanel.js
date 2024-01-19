export default function togglePanel() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const toggPanelBtn = document.querySelector("#toggPanelBtn");

  function checkWindowWidthAndResize() {
    if (window.innerWidth <= 700 && window.innerHeight <= 761) {
      sidebar.style.display = "none";
      main.style.gridColumn = "1/3";
      toggPanelBtn.textContent = "menu";
      return;
    } else {
      sidebar.style.display = "grid";
      main.style.gridColumn = "2/3";
      toggPanelBtn.textContent = "menu_open";
      return;
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    checkWindowWidthAndResize();
  });
  window.addEventListener("resize", () => {
    checkWindowWidthAndResize();
  });

  function handlePanel() {
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
  toggPanelBtn.addEventListener("click", handlePanel);
}
