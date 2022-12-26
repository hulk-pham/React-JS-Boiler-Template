import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth.slices";
import userReducer from "./slices/user.slices";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export function configureAppStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
  });

  return store;
}

const store = configureAppStore();

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type StoreDispatch = AppStore["dispatch"];

export default store;
