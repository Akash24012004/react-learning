import { Food_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userDataContext from "../utils/userContext";
const Card=(object)=>{
   const {user,setuser}=useContext(userDataContext);
 const dish=object.object;

  return ( <div className="w-48 m-2 p-1 bg-teal-200 hover:bg-amber-100"id="card">
      
      <Link to ={`/Restorents/${dish.id}`}>
      
      <img className="h-24 w-48" alt="poori-sabji" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+dish.cloudinaryImageId
}></img>
      <h2>{dish.name}</h2>
      <h3>{dish.costForTwoMessage}</h3>
      <h3>{dish.avgRating}</h3>
      <h4>{dish.areaName}</h4>
      <h5>{user}</h5>
      </Link>
     </div>)
}
const improveCard=(Card)=>{

      return (props)=>{

            return (
                  <div>
                  <label className="absolute text-white bg-black p-1 rounded-lg shadow-2xl">Pramoted</label>
                  <Card object={props.object} />
                  </div>
            )
      }
}

export   {Card, improveCard};
