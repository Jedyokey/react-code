// updater function = A function passed as an argument to setState() manually
//                    e.g: setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        // Uses the CURRENT state to calculate the NEXT state
        // set functions do not trigger an update
        // React batches together state updates for performance reasons
        // NEXT state becomes the CURRENT state after an update

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1); 

        // c represents the previous count not the current count
        // Takes the PENDING state to calculate the NEXT state
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order
    }
    const decrement = () => {
        if (count > 0) {
            setCount(c => c - 1);
            setCount(c => c - 1);
            setCount(c => c - 1);
        }
        // setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }


  return (
    <div className='counter-container'>
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
