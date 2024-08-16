import React from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

const NavBtn = () => {
    // let history = useHistory();

//     const navigateToConditions = () => {
//     history.push('/conditional');
//   };
  return (
    <div>
        <Link to="/conditional">Rendering</Link>
    </div>
  )
}

export default NavBtn
