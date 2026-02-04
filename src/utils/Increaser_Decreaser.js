import {useDispatch,useSelector} from "react-redux";
import { decrement,increment } from "./ItemCounterSlice";
import React from "react";
import { useContext} from "react";
import userDataContext from "./userContext";
 
const Increaser_Deacreaser=({count,setCount})=>{
    const value=useSelector((state)=>{state.CartItem.CartItem});
    const {cartCount,setcartCount}=React.useContext(userDataContext)
    const Dispatch=useDispatch();
    console.log(count)
    function decreaser(){
      if(count==1){
       Dispatch(decrement()); 
       setCount((count)=>count-1);
       setcartCount(count=>count-1)
      }
      else{
       Dispatch(decrement()); 
       setCount((count)=>count-1);
      }
    }
  return (
    <div  className="bg-orange-300 flex justify-around">
      <button onClick={()=>{decreaser()}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{Dispatch(increment());setCount((count)=>count+1)}}>+</button>
    </div>
  );
}

export default Increaser_Deacreaser;

