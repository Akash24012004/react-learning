import useCheckOnlineOfline from "../utils/useCheckOflineOnline"
import { LOGO_URL } from "../utils/constant"
import { useState } from "react"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

const Header=()=>{
    console.log("function called")
  const [count,setValue]=useState("login");
  const status=useCheckOnlineOfline();
  const ItemCounter=useSelector((state)=>{ console.log(state);return state.CartItem.cartItem})
  
 return (<div id="headerDiv" className="flex justify-between items-center shadow-2xl  bg-slate-500"  >
    <img className="w-24 mx-2  my-2 p-2 " src={LOGO_URL}></img>
    <nav>
      <ul className="flex ">
        <li className="p-4">Online-Status:{status=="online"?"💚":"❤️"}</li>
         
        <li className="p-4"><Link to="/">Home</Link></li>
        <li className="p-4"><Link to="/Contect">Contact</Link></li>
        <li className="p-4"><Link to="/Cart">Cart {ItemCounter}</Link></li>
        <li className="p-4"><Link to="/AboutUs">About Us</Link></li>
        <li className="p-4" onClick={()=>{
          if(count=="login"){
          setValue("logout");
          
          }
          else{
            setValue("login")
          }
        }}><Link to="/login-logout" id="login-logout" >{count}</Link></li>
      </ul>
    </nav>
  </div>)
}
export default Header