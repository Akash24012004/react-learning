import {LOGO_URL,Food_URL} from "./constant";
import {useSelector,useDispatch} from "react-redux";
import { increment } from "./ItemCounterSlice";
import { useState } from "react";
import React from "react";
import { useContext } from "react";
import Increaser_Deacreaser from "./Increaser_Decreaser";
import userDataContext from "./userContext";
import  {add,remove}  from "./ArraySlices";
const Menucard=(item)=>{
   const [count,setCount]=useState(0);
   const ItemInfo=item.data.card.info;
   const {name,price,imageId,id}=ItemInfo; 
   const dispatch=useDispatch();
   const {countCart,setcartCount}=React.useContext(userDataContext);
   
   return (
    <div className="flex justify-between mb-2 bg-slate-300">
      <div className="pb-2" >
        <h2>{name}</h2>
        <h3>{`${price/100}₹`}</h3>
      </div>
      <div className="relative">
      {count? <Increaser_Deacreaser  count={count} setCount={setCount}/>:<button className="border-2 border-black text-sm px-1 absolute left-5 bg-slate-50 cursor-pointer" onClick={()=>{setCount((count)=>count+1); dispatch(increment());setcartCount(count=>count+1);dispatch(add(item))}}>add</button>}
      <img className="w-24 p-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
     </div>
    </div>
   ) 
};
export default Menucard    