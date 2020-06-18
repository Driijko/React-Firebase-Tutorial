import React, {createContext, useState, useReducer, useEffect} from 'react';

import rootReducer from "./reducers/rootReducer";

import {projects} from "./reducers/projectReducer";

const Context = createContext();

function ContextProvider(props) {

  const initialState = {
    projects: projects
  }

  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(()=> {
    console.log(state);
  }, [state]);

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