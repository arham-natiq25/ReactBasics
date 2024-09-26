"use client";  
import React, { useEffect } from 'react'


export default function New() {
    function loggingData()
    {
       useEffect(()=>{
        console.log("Hello I am logging ");
       });

       return <h3>hELLO</h3>;
    }
  return (
    <div>
       {loggingData()}
       <h3>Hi</h3>
       <h3>bye</h3>
    </div>
  )
}
