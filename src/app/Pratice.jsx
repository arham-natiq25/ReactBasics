import React from 'react'

export default function Pratice(props) {
    // const x = 11;
    // let text = "Goodbye";
    // if (x < 10) {
    // text = "Hello";
    // }
    const x = 11
    
    function Car() {
        return <h2>Hi, I am a Car!</h2>;
      };
    
    const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
    return (
      <div>
        {/* {myElement} */}
        {/* {Car()} */}
        <h3>My name is {props.name}</h3>
        <h3>My practice is {props.practice}</h3>
      </div>
        
  )
}
