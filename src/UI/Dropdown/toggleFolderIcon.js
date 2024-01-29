import hidesPanel from "../Panel/hidesPanel";

const toggleFolderIcon = () => {
  const proyectItem = [...document.querySelectorAll(".project-item")];
  proyectItem.map((item) =>
    item.addEventListener("focus", () => {
      item.children[0].textContent = "folder_open";
      if (window.innerWidth <= 700) {
        setTimeout(() => {
          hidesPanel();
        }, 500);
      }
    })
  );
  proyectItem.map((item) =>
    item.addEventListener("blur", () => {
      item.children[0].textContent = "folder";
    })
  );
};

export default toggleFolderIcon;
