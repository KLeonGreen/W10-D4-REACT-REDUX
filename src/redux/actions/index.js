export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const SEARCH_JOBS = "SEARCH_JOBS";
export const REMOVE_FAV = "REMOVE_FAV";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";

export const addToFavorites = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const removeFavorite = (i) => {
  return {
    type: REMOVE_FAV,
    payload: i,
  };
};

export const getJobs = (query) => {
  return async (dispatch, getState) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });

    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        let data = await response.json();

        const jobs = data.data;

        dispatch({
          type: IS_LOADING,
          payload: false,
        });

        dispatch({
          type: SEARCH_JOBS,
          payload: jobs,
        });
      } else {
        alert("Error fetching results");
        dispatch({
          type: IS_LOADING,
          payload: false,
        });
        dispatch({
          type: IS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: IS_LOADING,
        payload: false,
      });

      dispatch({
        type: IS_ERROR,
        payload: true,
      });
    }
  };
};
