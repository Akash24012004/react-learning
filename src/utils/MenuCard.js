import {LOGO_URL,Food_URL} from "./constant";
const Menucard=(item)=>{
   const {name,price,imageId,id}=item.data.card.info;  
   return (
    <div className="flex justify-between mb-2 bg-slate-300">
      <div className="pb-2" >
        <h2>{name}</h2>
        <h3>{`${price/100}₹`}</h3>
      </div>
     <img className="w-24 p-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
    </div>
   ) 
};
export default Menucard