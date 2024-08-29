import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContext' 
import ComponentD from './ComponentD'

const ComponentC = () => {
    const user = useContext(UserContext);

  return (
    <div className='box'>
        <h1>Component C</h1>
        {/* <ComponentD user={props.user} /> */}
        <h2>{`Hey ${user}! How far you??`}</h2>  
        <ComponentD />
      
    </div>
  )
}

export default ComponentC
