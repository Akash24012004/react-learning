import React from "react";
import {useState,useEffect} from "react";
const useCheckOnlineOfline=()=>{
    const [status,setStatus]=useState("online")
    

    useEffect(()=>{
    window.addEventListener("online",()=>{
    
    setStatus("online")
   });

    window.addEventListener("offline",()=>{
        
          setStatus("Offline")
    })})
    return status
}
export default useCheckOnlineOfline;