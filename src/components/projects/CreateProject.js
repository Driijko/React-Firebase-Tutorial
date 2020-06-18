import React, {useState, useContext} from "react";

import Context from "../../store/Context";

import {createProject} from "../../store/actions/projectActions";

export default function CreateProject(props) {

  const {dispatch} = useContext(Context);

  const [state, setState] = useState({
    title: "",
    content: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProject(state));
  }

  function handleChange(e) {
    const property = e.target.id;
    const value = e.target.value;
    setState(prev => {
      return(
        {...prev, [property]: value}
      )
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" onChange={handleChange} className="materialize-textarea"></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}