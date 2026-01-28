
import Menucard from "./MenuCard";
import { useState,useEffect} from "react";
const RestoFilterdData=({filteredData,show,setindex,index})=>{
  
  console.log(show)
    console.log(filteredData)
    const itemCard=filteredData.card.card.itemCards;
    console.log(itemCard)
    return(<div className="m-2">
        <div className="flex  font-bold bg-slate-200 p-2 justify-between cursor-pointer border-b-black" onClick={()=>{show?setindex(null):setindex(index)}}>
           <h1>{filteredData.card.card.title}</h1>
           <span>⬇️</span>
       </div>
          
  
    <div>
    {show && itemCard.map((item)=>{
         return  <Menucard key={item.card.info.id} data={item} />
    })}
    </div>    
    </div>)
}
export default RestoFilterdData