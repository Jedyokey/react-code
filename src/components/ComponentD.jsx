import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContext' 

const ComponentD = () => {
    const user = useContext(UserContext); 

  return (
    <div className='box'>
        <h1>Component D</h1>
        {/* <h2>{`Bye ${props.user}`}</h2> */}
        <h2>{`Bye ${user}`}</h2>
      
    </div>
  )
}

export default ComponentD
