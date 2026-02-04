import { useContext } from "react";
import userDataContext from "./userContext";
import React from "react";

const SelectCart=()=>{
    const {cartCount,setcartCount}=React.useContext(userDataContext)
    console.log(cartCount);
    return( 
       cartCount ? (<div className="bg-amber-500 fixed bottom-0 left-0">
       {`you selected ${cartCount} card`}
      </div>):<></>
   
    )
}
export default SelectCart;