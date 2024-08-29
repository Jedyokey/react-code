// useEffect() = React hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {})             // Runs after every re-render
// 2. useEffect(() => {}, [])         // Runs only on mount
// 3. useEffect(() => {}, [value])    // Runs on mount + when value changes

// USES
// 1. Event Listeners
// 2. DOM Manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching Data from an API
// 5. Clean up when a component unmounts

import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    useEffect(() => {
        document.title = `Count score is ${count} ${color}`;
        // document.title = `My Counter Program`;

        return () => {
            // SOME CLEANUP CODE
        }
    }, [count, color]);

    const addCount = () => {
        setCount(c => c + 1);
    }
    const minusCount = () => {
        setCount(c => c - 1);
    }
    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green");
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED!");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED!");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

  return (
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button><br />

        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
      
    </div>
  )
}

export default UseEffect
