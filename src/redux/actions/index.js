export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const SEARCH_JOBS = "SEARCH_JOBS";

export const addToFavorites = (job) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: job,
  };
};

export const getJobs = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        let jobs = await response.json();
        dispatch({
          type: SEARCH_JOBS,
          payload: jobs,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
