"use client"
import React, { useEffect, useState } from 'react'

export default function Check() {
    // Using Use state define the state of count starting from 0
    const [count,setCount] =useState(0);
 
        useEffect(()=>{
         document.title = `You clicked ${count} times`;   
        },[count]);
   
  return (
    <div>
        <h4>You click {count} times </h4>
        <button onClick={()=>setCount(count+1)}>
        click  me
        </button>
    </div>
  )
}
