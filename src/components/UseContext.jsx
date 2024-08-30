// useContext() = React hook that allows you to share values between multiple
//                levels of component without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './UseContext';
// 2. const value = useContext(MyContext); 

import React from 'react'
import ComponentB from './ComponentB'
import { useState, createContext } from 'react'

export const UserContext = createContext();

const UseContext = () => {
    const [user, setUser] = useState("Jedy++");

  return (
    <div className='box'>
        <h1>Component A (useContext())</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB user={user} /> 
        </UserContext.Provider> 
        
      
    </div>
  )
}

export default UseContext
