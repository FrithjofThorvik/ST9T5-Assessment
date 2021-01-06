import React, { createContext, useContext, useReducer } from "react";

// Prepare StateValue
export const StateContext = createContext();

// Wrap the App and provide the StateValue
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull from StateValue
export const useStateValue = () => useContext(StateContext);
