import useCheckOnlineOfline from "../utils/useCheckOflineOnline";
import  {Card,improveCard} from "./Card";
import Simmer from "./Simmer";
import { useEffect, useState ,useContext} from "react";
import userDataContext from "../utils/userContext";


const CardContainer=()=>{
  
const [count,setCount]=useState([])
const [value,setValue]=useState("")
const [filteredObj,setFilterObj]=useState(null)
const status=useCheckOnlineOfline()
console.log("hii body part is also render")
const {user,setuser}=useContext(userDataContext);

useEffect(()=>{
const ApiData=async()=>{
  const response= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.4514473&lng=81.8736584&carousel=true&third_party_vendor=1");
  const data=await response.json()
  console.log(data)
  setFilterObj(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setCount(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  ApiData()
},[])

const ImproveCard=improveCard(Card);
 console.log(count)
  return (
    <div>

          <input className="border-2 border-black m-3 rounded-lg p-2 h-6"  onChange={(e)=>{
                setValue(e.target.value)
          }}></input>

          <button className="border-2 border-blue-700 rounded-md bg-slate-500 hover:bg-red-600" onClick={()=>{
            const filteredObject=count.filter((elem)=>{
           return elem.info.name.toLowerCase().includes(value.toLowerCase())
            })
            console.log(value)
           
            console.log(filteredObject)
           setFilterObj(filteredObject)
          }}>search</button>
         <label className="m-2 font-bold">user :</label>
          <input onChange={(e)=>{setuser(e.target.value)}}></input>

          <div className="flex flex-wrap"id="Card-Container">
          {filteredObj==null ?  <Simmer />:filteredObj.length==0?<h1>restorent not found</h1>:filteredObj.map((elem)=>{
            return elem.info.areaName==="Civil Lines"? <ImproveCard key={elem.info.id} object={elem.info}/> :<Card  key={elem.info.id} object={elem.info}/>
 } )
                }
        </div>
    </div>
  )

}

export default CardContainer