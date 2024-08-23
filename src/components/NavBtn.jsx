import React from 'react'
import { Link } from 'react-router-dom'

const NavBtn = () => {
  

  return (
    <div>
        <Link to="/conditional">Rendering</Link><br />
        <Link to="/hooks">Hooks & More</Link>
    </div>
  )
}

export default NavBtn
