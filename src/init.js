import notYetTasks from "./UI/Panel/Views/notYetTasks/notYetTasks";

const init = () => {
    const main = document.querySelector(".main");
    main.appendChild(notYetTasks());
}

export default init;