import React from "react";
import { useState,useEffect} from "react";
import ButtonIncrease from "../utils/ButtonIncrease";
import { useSelector,useDispatch} from "react-redux";
import  { increment,decrement } from "../utils/countSlice";
const Contect=()=>{
    const {count,Increment}=ButtonIncrease()
     const data=useSelector((state)=>{return state.counter.value})
     console.log(data)
     const dispatch=useDispatch()
   return(
    <div>
   <h1> you can join software engeneer job after learning complete akshay saini project</h1>
   <h1>{data}</h1>
   <button onClick={()=>{dispatch(increment())}}>click me</button>
   </div>
   )
}
export default Contect