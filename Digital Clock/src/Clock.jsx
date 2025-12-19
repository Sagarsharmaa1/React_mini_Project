import React from "react";
import { useState,useEffect } from "react";

function Clock(){
   const[time,settime]= useState(new Date());

   const hour = time.getHours()
   const min = time.getMinutes()
   const sec = time.getSeconds()


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
        return `${hour}: ${min}: ${sec}`
    }
    return(
        <div>
            <p>Digital Clock</p>
           
           {formattime()}

        </div>
    )
}
export default Clock;