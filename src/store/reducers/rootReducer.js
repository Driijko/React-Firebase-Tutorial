import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

export default function rootReducer(state, action) {
  switch(action.type) {

    case "PROJECT_ACTION" :
      const newProjects = projectReducer(state, {type: action.subType, project: action.project});
      return ({...state, projects: newProjects});

    default:
      throw new Error();
  }
}