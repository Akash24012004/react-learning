import React from "react";
import { useState,useEffect } from "react";
const ButtonIncrease=()=>{
    const [count,setCount]=useState(1);
    console.log("i am in button Increase")
    const Increment=()=>{
        console.log("button clicked")
         return setCount(c=>c+1) };
    return {count,Increment}
}
export default ButtonIncrease;