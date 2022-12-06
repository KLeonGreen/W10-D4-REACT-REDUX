import { act } from "react-dom/test-utils";
import { IS_ERROR, IS_LOADING, SEARCH_JOBS } from "../actions";

const initialState = {
  searchJobs: [],
  isLoading: false,
  isError: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        searchJobs: action.payload,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case IS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};
