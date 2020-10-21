import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
findingFilm: "toy",
films: [],
};

export const filmSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    findingFilmChange: (state,action) => {
      state.findingFilm = action.payload;
    },
    setFilms: (state,action) => {
        state.films = action.payload;
    }
  },
});

export const {
    findingFilmChange,
    setFilms,
} = filmSlice.actions;

export const selectCounter = (state) => state.Film.findingFilm;
export const selectFilms = (state) => state.Film.films;

// export const fetchFilms = () => async (dispatch) => {
//     try {
//       const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=e8946768c79e35f0a2280f8329309f3f");
//       dispatch(setFilms(response.data));
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
export const fetchFilms = (name) => (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=d80a54a0422d5fff6149c48741c8bece&language=en-US&query=" + name)
    .then(response => {
      console.log(response);
      let movies = response.data.results;
      dispatch(setFilms(movies))
      });
    }
export default filmSlice.reducer;
