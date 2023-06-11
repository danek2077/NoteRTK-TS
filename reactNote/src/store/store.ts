import { Middleware, configureStore } from "@reduxjs/toolkit";
import PostSlice, { everyReducerMiddleWare } from "./slices/PostSlice";
const preloadedState: {} = localStorage.getItem("usersStore")
  ? { PostSlice: { users: JSON.parse(localStorage.getItem("usersStore")!) } }
  : {};
export const store = configureStore({
  reducer: {
    PostSlice,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(everyReducerMiddleWare) as Middleware[],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
