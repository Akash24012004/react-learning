import "./style.css";

import Cart from "./components/Cart";
import Header from "./components/Header";
import CardContainer from "./components/Body";
import RouterLearning from "./components/routerLearning";
import Ucs from "./UCU"
import { createBrowserRouter,RouterProvider,Link, BrowserRouter} from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Contect from "./components/Contact";
 import Index from "./main";     
 import React from "react";
import ReactDOM from "react-dom/client"; 
import Restorents from "./components/Restrorent";        
 
 const router=createBrowserRouter([ 
  {
  path:"/",
  element:<Index />,
  children:[
   {
     path:"/",
     element:<CardContainer />
   },
{
   path:"Contect",
   element:<Contect />
},{
  path:"AboutUs",
  element:<AboutUs id={"class base component"} />
},{
   path:"Cart",
   element:<Cart />
},{
   path:"/Restorents/:id",
   element:<Restorents />
}]  
}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)



 

