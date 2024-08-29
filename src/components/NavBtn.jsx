import React from 'react'
import { Link } from 'react-router-dom'

const NavBtn = () => {
  
  return (
    <div className='nav-bar'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/conditional">Rendering</Link>
        <Link className='nav-link' to="/hooks">Hooks & More</Link>
        <Link className='nav-link' to="/mini-project">To-Do list</Link>
        <Link className='nav-link' to="/useEffect&more">UseEffect & More</Link>
        <Link className='nav-link' to="/useRef&Project">UseRef & Project</Link>
    </div>
  )
}

export default NavBtn
