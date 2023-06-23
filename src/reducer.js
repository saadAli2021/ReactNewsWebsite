import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES: {
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    }

    case HANDLE_PAGE: {
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage >= state.nbPages) nextPage = 0;
        return { ...state, page: nextPage };
      } else {
        let prevPage = state.page - 1;
        if (prevPage < 0) prevPage = state.nbPages;
        return { ...state, page: prevPage };
      }
      return { ...state };
    }

    case HANDLE_SEARCH: {
      return { ...state, query: action.payload, page: 0 };
    }

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
