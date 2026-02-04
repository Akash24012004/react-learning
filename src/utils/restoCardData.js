import { useState } from "react";
import RestoFilterdData from "./RestoFilteredData";
import  userDataContext from "./userContext"
import { Provider } from "react-redux";
import SelectCart from "./SelectCart";
import React from "react";
const RestoCardData=(restoCard)=>{
    const [INDEX,SETINDEX]=useState(null)
    const [cartCount,setcartCount]=React.useState(0)
    
    const Card= restoCard.data.groupedCard.cardGroupMap.REGULAR.cards;
    console.log(Card);
    const filterCard=Card.filter((elem)=>{
        return elem.card.card["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    console.log(filterCard)

    return(<div>
        <userDataContext.Provider  value={{cartCount,setcartCount}}>
          {filterCard.map((elem,index)=>{

            return (<div key={elem.card.card.title}> <RestoFilterdData filteredData={elem} show={ index===INDEX?true:false} setindex={(index)=>{
                SETINDEX(index)
            }} index={index}/> </div>)
          }) } 
          <SelectCart />   
        
       </userDataContext.Provider>
    </div>)
}
export default RestoCardData