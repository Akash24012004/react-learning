import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
console.log(countReducer)
export const store =configureStore({
   reducer:{
      counter:countReducer
   } 
});