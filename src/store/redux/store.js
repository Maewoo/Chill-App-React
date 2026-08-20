import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moiveReducer";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
