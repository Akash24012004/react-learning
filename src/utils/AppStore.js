import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice.js"
import ItemCounterSlice from "./ItemCounterSlice"
import arraySlice from "./ArraySlices"

export const store =configureStore({
   reducer:{
      counter:countSlice,
      CartItem:ItemCounterSlice,
      array:arraySlice
   } 
});