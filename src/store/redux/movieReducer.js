import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    data: [],
  },

  reducers: {
    setMovies: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
