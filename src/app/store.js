import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prod: productReducer,
  },
});
