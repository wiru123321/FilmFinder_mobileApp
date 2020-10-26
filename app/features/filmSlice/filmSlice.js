import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
findingFilm: "toy",
films: [],
favoriteFilms:[],
genres: [],
filmInfo:[],
topRated:[],
selectedGenres:""
};


function insertItem(array, action) {
  let newArray = array.slice()
  newArray.splice(action.index, 0, action.item)
  return newArray
}

export const filmSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    findingFilmChange: (state,action) => {
      state.findingFilm = action.payload;
    },
    setFilms: (state,action) => {
      state.films=[];
        state.films = action.payload;
    },
    setGenres: (state,action) => {
      state.genres.push(action.payload);
    },
    setFilmInfo: (state,action) => {
      state.filmInfo.push(action.payload);
    },
    setTopRated: (state,action) => {
      state.topRated.push(action.payload);
    },
    setFavoriteFilms: (state,action) => {
      state.favoriteFilms.push(action.payload);
    },
    removeFavoriteFilms: (state,action) => {
      let index = state.favoriteFilms.indexOf(action.payload)
      state.favoriteFilms.splice(index,1);
    },
    setSelectedGenres: (state,action) => {
      state.selectedGenres = action.payload;
    },
    resetFilmInfo:(state) => {
      state.filmInfo = [];
    },
    resetTopRated:(state) => {
      state.topRated = [];
    },

  },
});

export const {
    findingFilmChange,
    setFilms,
    setGenres,
    setFavoriteFilms,
    removeFavoriteFilms,
    setFilmInfo,
    reset,
    setTopRated,
    setSelectedGenres,
    resetTopRated,
    resetFilmInfo,
} = filmSlice.actions;

export const selectCounter = (state) => state.Film.findingFilm;
export const selectFilms = (state) => state.Film.films;
export const selectGenres = (state) => state.Film.genres;
export const selectFilmInfo = (state) => state.Film.filmInfo;
export const selectFavoriteFilms = (state) => state.Film.favoriteFilms;
export const selectTopRated = (state) => state.Film.topRated;
export const selectSelectedGenres = (state) => state.Film.selectedGenres;

export const fetchFilms = (name,genre) => async (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=d80a54a0422d5fff6149c48741c8bece&language=en-US&query=" + name+"&with_genres="+genre)
    .then(response => {
      let movies = response.data.results;
      dispatch(setFilms(movies))
      movies.map(movie => dispatch(fetchFilmsInfo(movie.id,1)))
      });
};
export const fetchFilmsInfo = (id,type) => async (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key=e8946768c79e35f0a2280f8329309f3f&language=en-US")
    .then(response => {
      let movie = response.data;
      if(type==1)
      dispatch(setFilmInfo(movie))
      else
      dispatch(setTopRated(movie))
      });
};

export const fetchTopRatedFilms = (genre) => async (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e8946768c79e35f0a2280f8329309f3f&with_genres="+genre)
    .then(response => {
      let movies = response.data.results;
      movies.map(movie => dispatch(fetchFilmsInfo(movie.id,2)))
      });
};

export const fetchGenres = () => async (dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e8946768c79e35f0a2280f8329309f3f")
    .then(response => {
      let genres = response.data;
      console.log(genres);
      genres.genres.map(genre =>  dispatch(setGenres(genre)))
      });
};

export default filmSlice.reducer;
