import React from 'react'
import Home from './pages/Home'
import Conditional from './pages/Conditional'
import NavBtn from './components/NavBtn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <component key=value />

// defaultProps = default values for props in case they are not passed from the 
//                parent component
//                name: "Guest"

const App = () => {
  return (
    <div>
      <Router>
        <NavBtn />
        <Routes>
          <Route path='/' element=<Home/> />
          <Route path='/conditional' element=<Conditional/> />
          {/* <Route path='/services' element=<Services/> />
          <Route path='/contact' element=<Contact/> />  */}
        </Routes>
      </Router> 
    </div>
  )
}

export default App
