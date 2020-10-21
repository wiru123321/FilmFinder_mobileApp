import { createSlice } from "@reduxjs/toolkit";

const initialState = {
counter: 5,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    counterChange: (state) => {
      state.counter = state.counter + 1;
    },
  },
});

export const {
    counterChange,
} = filmSlice.actions;

export const selectCounter = (state) => state.film.counter;

export default filmSlice.reducer;
