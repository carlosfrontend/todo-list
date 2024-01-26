import createNewProject from "./createNewProject";
import Project from "../Models/Project";
import myProjects from "./myProjects";

const createDefaultProject = () => {
    const defaultProject = createNewProject(new Project("Inbox"));
    return defaultProject;
}

export default createDefaultProject;