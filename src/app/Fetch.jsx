"use client"
import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await res.json();


            setData(result);

        }
        fetchData();
    },[]) // run only once ...
  return (
    <div>
        {data ? <pre>{JSON.stringify(data,null,2)} </pre> : 'Loading ...'}
    </div>
  )
}
