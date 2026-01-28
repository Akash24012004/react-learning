import Header from "./components/Header";
import CardContainer from "./components/Body";
import userDataContext from "./utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./utils/AppStore";

import {Outlet} from "react-router-dom"

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
const Index=()=>{
    const [user,setuser]=useState("Akash")
    console.log(user)
    return( 
        <Provider store={store}>
        <userDataContext.Provider  value={{user,setuser}}>
        <div>
           <Header />
           <Outlet />
        </div>
        </userDataContext.Provider>
        </Provider> 
    )
}

export default Index
   

  
