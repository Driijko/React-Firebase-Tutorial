export const projects = [
  {id: "1", title: "help me find peach", content: "blah blah blah"},
  {id: "2", title: "collect all stars", content: "blah blah blah"},
  {id: "3", title: "egg hunt with yoshi", content: "blah blah blah"}
];

export default function projectReducer(state = projects, action) {
  switch(action.type) {

    case "CREATE_PROJECT":
      const {project} = action;
      project.id = `${Math.floor(Math.random() * 100000)}`;
      // console.log([...state.projects, project]);
      return [
        ...state.projects,
        project
      ]

    default:
      throw new Error();
  }
}

