import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();
const API = "https://hn.algolia.com/api/v1/search_by_date?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={"hellow worlds"}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
