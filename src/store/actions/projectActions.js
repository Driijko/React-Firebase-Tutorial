export function createProject(project) {
  return {
    type: "PROJECT_ACTION",
    subType: "ADD_PROJECT",
    project: project
  }
}