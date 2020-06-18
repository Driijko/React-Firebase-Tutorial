import React, {useContext} from "react";

import Context from "../../store/Context";

import ProjectSummary from "./ProjectSummary";

export default function ProjectList(props) {

  const {state: {projects}} = useContext(Context);

  const projectList = projects && projects.map(project => {
    const {id, title} = project;
    return (
      <ProjectSummary title={title} key={id} />
    )
  })

  return (
    <div className="project-list section">
      {projectList}
    </div>
  )
}