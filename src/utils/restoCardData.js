import { useState } from "react";
import RestoFilterdData from "./RestoFilteredData";
const RestoCardData=(restoCard)=>{
    const [INDEX,SETINDEX]=useState(null)
    
    
    const Card= restoCard.data.groupedCard.cardGroupMap.REGULAR.cards;
    console.log(Card);
    const filterCard=Card.filter((elem)=>{
        return elem.card.card["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    console.log(filterCard)

    return(<div>
        
          {filterCard.map((elem,index)=>{

            return (<div key={elem.card.card.title}> <RestoFilterdData filteredData={elem} show={ index===INDEX?true:false} setindex={(index)=>{
                SETINDEX(index)
            }} index={index}/> </div>)
          }) }    
        

    </div>)
}
export default RestoCardData