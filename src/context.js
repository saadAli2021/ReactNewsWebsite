import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actionTypes";
const AppContext = React.createContext();
const API = "https://hn.algolia.com/api/v1/search_by_date?";

const initialState = {
  isLoading: false,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchStories(`${API}query=${state.query}?page=${state.page}`);
  }, [state.page, state.query]);

  const handlePage = (operation) => {
    dispatch({ type: HANDLE_PAGE, payload: operation });
  };
  const handleSearch = (_query) => {
    dispatch({ type: HANDLE_SEARCH, payload: _query });
  };
  return (
    <AppContext.Provider value={{ ...state, handlePage, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
