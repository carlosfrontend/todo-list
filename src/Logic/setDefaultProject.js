import Project from "../Models/Project";
import getDataFromLocalStorage from "../LocalStorage/getDataFromLocalStorage";
import saveToLocalStorage from "../LocalStorage/saveToLocalStorage";

const setDefaultProject = () => {
  // Set default project in locaStorage
  if (getDataFromLocalStorage() === null) {
    saveToLocalStorage([]);
    const defaultproject = new Project("Inbox");
    const parsed = getDataFromLocalStorage();
    parsed.push(defaultproject);
    saveToLocalStorage(parsed);
  }
};

export default setDefaultProject;
