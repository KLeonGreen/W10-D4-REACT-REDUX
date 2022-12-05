import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../reducers/favorites";
import { searchReducer } from "../reducers/jobStore";

/*state.search.searchJobs
state is the arguement of combineReducers
state = {
  search:{
  searchJobs: [],
},
  favorites:{
    jobs:[]
  }
}



*/
const bigReducer = combineReducers({
  search: searchReducer,
  favorites: favoriteReducer,
});

const store = configureStore({ reducer: bigReducer });
export default store;
