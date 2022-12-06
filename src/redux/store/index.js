import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../reducers/favorites";
import { searchReducer } from "../reducers/jobStore";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};
const bigReducer = combineReducers({
  search: searchReducer,
  favorites: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
