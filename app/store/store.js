import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "../features/filmSlice/filmSlice";

export default configureStore({
  reducer: {
film: filmReducer,
  },
});
