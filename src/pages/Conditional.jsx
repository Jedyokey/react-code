import React from 'react'
import UserGreeting from '../components/UserGreeting'
import List from '../components/List'
import Click from '../components/Click'
import ProfilePicture from '../components/ProfilePicture'


// Conditional rendering = allows you to control what gets rendered in your 
//                         application based on certain conditions.
//                         (show, hide, or change components)

const Conditional = () => {
  // const fruits = ["apple", "banana", "water-melon", "paw-paw"];

  const fruits2 =[
    {id: 1, name: "cherry", calories: 95},
    {id: 2, name: "coconut", calories: 45},
    {id: 3, name: "mango", calories: 105},
    {id: 4, name: "pine-apple", calories: 159}, 
    {id: 5, name: "avocado", calories: 37}
  ]

  const vegetables =[
    {id: 6, name: "potatoes", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 25},
    {id: 9, name: "corn", calories: 63}, 
    {id: 10, name: "broccoli", calories: 50}
  ]

  return (
    <div>
        <UserGreeting isLoggedIn={true} username="Jedy++" />
        <h1>Conditional Rendering</h1>
        <Click /><br /><br />
        <ProfilePicture />

        {/* <List pack={fruits} /> */}
        {/* {fruits2.length > 0 ? <List item={fruits2} category="Fruits" /> : null} */}
        {fruits2.length > 0 && <List item={fruits2} category="Fruits" />}
        {/* {vegetables.length > 0 ? <List item={vegetables} category="Vegetables" /> : null} */}
        {vegetables.length > 0 && <List item={vegetables} category="Vegetables" />}
        
    </div>
  )
}

export default Conditional
