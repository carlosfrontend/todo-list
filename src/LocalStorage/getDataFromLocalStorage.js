const getDataFromLocalStorage = () => {
  const parsed = JSON.parse(localStorage.getItem("todolist"));
  return parsed;
};

export default getDataFromLocalStorage;