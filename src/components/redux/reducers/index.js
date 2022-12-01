const initialState = {
  favorites: {
    jobs: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          jobs: [...state.favorites.jobs, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
