import React from 'react'
import UserGreeting from '../components/UserGreeting'

// Conditional rendering = allows you to control what gets rendered in your 
//                         application based on certain conditions.
//                         (show, hide, or change components)

const Conditional = () => {

  return (
    <div>
        <UserGreeting isLoggedIn={true} username="Jedy++" />
        <h1>Conditional Rendering</h1>
    </div>
  )
}

export default Conditional
