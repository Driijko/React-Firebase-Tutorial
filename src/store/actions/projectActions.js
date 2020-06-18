export function createProject(project) {
  return {
    type: "PROJECT_ACTION",
    subType: "CREATE_PROJECT",
    project: project
  }
}