import { configureStore } from "@reduxjs/toolkit";
//reducer
import reducers from "../reducers";

export const store = configureStore({
  reducer: reducers,
});

