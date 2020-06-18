import React, {createContext, useState, useReducer, useEffect} from 'react';

import rootReducer from "./reducers/rootReducer";

import {projects, projectReducer} from "./reducers/projectReducer";

const Context = createContext();

function ContextProvider(props) {

  const initialState = {
    projects: projects
  }

  function reducer(state, action) {
    switch(action.type) {

      case "PROJECT_ACTION" :
        const newProjects = projectReducer(state, {type: action.subType, project: action.project});
        return ({...state, projects: newProjects});

      default:
        throw new Error();
    }
  }

  // Using the dispatch function looks like this: dispatch({type:"TEST"})
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{state, dispatch}}
    >
      { props.children }
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};