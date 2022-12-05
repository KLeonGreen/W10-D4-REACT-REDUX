import { ADD_TO_FAVORITES, REMOVE_FAV } from "../actions";

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

    case REMOVE_FAV:
      return {
        ...state,
        jobs: state.jobs.filter((job, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
};
