import React from "react";
import { useState,useEffect } from "react";

function Clock(){
   const[time,settime]= useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            settime(new Date());
        },1000);

        console.log("rnder");
        return()=>{
            clearInterval(intervalId);
        }
 
    },[]);

    function formattime(){

    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

        return `${hour}: ${min}: ${sec}`
    }
    return(
        <div>
            <p>Digital Clock</p>
            <h2>{formatTime()}</h2>
        </div>
    )
}
export default Clock;