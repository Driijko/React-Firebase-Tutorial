// const initState = {
//   projects: [
//     {id: "1", title: "help me find peach", content: "blah blah blah"},
//     {id: "2", title: "collect all stars", content: "blah blah blah"},
//     {id: "3", title: "egg hunt with yoshi", content: "blah blah blah"}
//   ]
// };

export const projects = [
  {id: "1", title: "help me find peach", content: "blah blah blah"},
  {id: "2", title: "collect all stars", content: "blah blah blah"},
  {id: "3", title: "egg hunt with yoshi", content: "blah blah blah"}
];

export function projectReducer(state = projects, action) {
  switch(action.type) {

    case "ADD_PROJECT":
      const {project} = action;
      return (
        
      )
  }
}