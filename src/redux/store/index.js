import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../reducers/favorites";
import { searchReducer } from "../reducers/jobStore";

const bigReducer = combineReducers({
  search: searchReducer,
  favorites: favoriteReducer,
});

const store = configureStore({ reducer: bigReducer });
export default store;
