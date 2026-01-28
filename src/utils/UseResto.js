import React from "react"
import { useState,useEffect } from "react"
const UseRestorent=(id)=>{
   const[HotalMenu,setHotalMenu]=useState(null);
   useEffect(()=>{ 
        const fetchData= async ()=>{
            
        const response=await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4514473&lng=81.8736584&restaurantId=${id}`);
       const data=await response.json();
       console.log(data);
       setHotalMenu(data)
      };
    fetchData()
     },[]);
     return HotalMenu
}
export default UseRestorent;