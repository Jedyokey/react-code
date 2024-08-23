// React hook = Special functions that allows functional components to use
//              React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and
//              more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM.
//              [name, setName]
import React from 'react'
import {useState} from 'react'

const UseStateHook = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Agba_Dev");
  }
  const incrementAge = () => {
    setAge(age + 10);
  }
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default UseStateHook
