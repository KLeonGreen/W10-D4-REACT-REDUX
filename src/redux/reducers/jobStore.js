import { SEARCH_JOBS } from "../actions";

const initialState = {
  searchJobs: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        searchJobs: action.payload,
      };

    default:
      return state;
  }
};
