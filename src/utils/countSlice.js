import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {value:0},
  reducers: {
    increment:(state)=>{
      console.log(state)
      state.value+=1;
      // ya RTK + Immer ki wajah se:
      // state += 1;  ❌ (primitive me mutation allowed nahi)
    }
  }
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
