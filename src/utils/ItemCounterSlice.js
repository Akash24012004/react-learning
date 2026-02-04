import { createSlice } from "@reduxjs/toolkit";

const ItemCounterSlice=createSlice({
    name:"CartCount",
    initialState:{
        cartItem:""
    },
    reducers:{
        increment:(State)=>{
          if(State.cartItem==""){
            State.cartItem=1
          }else{
          State.cartItem+=1
          }
        },
        decrement:(State)=>{
          
          if(State.cartItem==1){
            State.cartItem=""
          }else{
            State.cartItem-=1
          }
        }
    }
})
export default ItemCounterSlice.reducer
export const {increment,decrement}=ItemCounterSlice.actions

