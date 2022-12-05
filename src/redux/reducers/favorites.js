import { ADD_TO_FAVORITES } from "../actions";

const initialState = {
  jobs: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    default:
      return state;
  }
};
