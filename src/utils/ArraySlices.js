import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "array",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // action.payload ek array hoga
      console.log("reducer add is running");
      state.push(action.payload);
    },

    remove: (state, action) => {
      // action.payload = index
      console.log("reducer remove is running")
      state.splice(action.payload, 1);
    }
  }
});

export const { add, remove } = arraySlice.actions;
export default arraySlice.reducer;
