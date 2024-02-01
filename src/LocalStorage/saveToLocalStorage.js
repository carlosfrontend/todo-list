const saveToLocalStorage = (data) => {
  return localStorage.setItem("todolist", JSON.stringify(data));
};

export default saveToLocalStorage;
