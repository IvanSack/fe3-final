import { createContext, useReducer } from "react";
import { useContext } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext();

const contextReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ ...state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ContextGlobal);
};