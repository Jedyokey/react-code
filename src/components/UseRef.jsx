// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information, but
//            you don't want that information to trigger new re-renders.

//            USES
//            1. Accessing/Interacting with DOM elements
//            2. Handling focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import React from 'react'
import { useState, useEffect, useRef } from 'react'

const UseRef = () => {
    // const [number, setNumber] = useState(0);
    // const ref = useRef(0);
    // console.log(ref);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef1);
    });

    const handleClick1 = () => {
        // setNumber(n => n + 1);
        // ref.current++;
        // console.log(ref.current); 
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "grey";
        inputRef3.current.style.backgroundColor = "";
    }
    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "#c1db2e";
    }

  return (
    <div className='box-container'>
        <button onClick={handleClick1}>Click Me 1!</button>
        <input type="text" ref={inputRef1} /><br /><br />

        <button onClick={handleClick2}>Click Me 2!</button>
        <input type="text" ref={inputRef2} /><br /><br />

        <button onClick={handleClick3}>Click Me 3!</button>
        <input type="text" ref={inputRef3} /> 
      
    </div>
  )
}

export default UseRef
