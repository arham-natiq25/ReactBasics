"use client"
import React, { useEffect, useState } from 'react'

export default function Time() {
    const [second,setSeconds] =useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
                setSeconds((prev)=>prev+1);
        },1000)

        return ()=> clearInterval(interval);
    },[]);
  return (
    <div>
        timer : {second} seconds
    </div>
  )
}
