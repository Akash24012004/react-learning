import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import Simmer from "./Simmer"
import UseRestorent from "../utils/UseResto"
import RestoCardData from "../utils/restoCardData"
const Restorents=()=>{
    
    
    const {id}=useParams();
     const HotalMenu=UseRestorent(id);
     console.log(HotalMenu)
 
     if(HotalMenu!==null){
          
        
           const {name,city,cuisines,sla}=HotalMenu?.data?.cards[2]?.card?.card?.info;
           return(<div className="flex  flex-col justify-center items-center">
               <div className="w-96  m-4 bg-slate-300 rounded-2xl shadow-2xl">
                  <h1 className="font-bold m-1 px-4">{name}</h1>
                  <h2>{city}</h2>
                  <h3>{sla.deliveryTime}</h3>
                  <h2>{cuisines}</h2>
               </div>
               
                 <RestoCardData  data={HotalMenu?.data?.cards[5]} />
                 
           </div>)
     }else{
        console.log("length is not working")
         return  <Simmer />
     }
     
    
   
}
export default Restorents