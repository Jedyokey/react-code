import React from 'react'
import profilePic from '../images/Picture-1.webp'

const Card = () => {
    
  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="Profile Picture" /> 
      <h2 className='card-title'>Jedy++</h2>
      <p className='card-text'>Enthusiastic and detail-oriented Frontend Developer with experience in HTML, CSS, JavaScript, and WordPress. Proficient in creating responsive and user-friendly websites, with a beginner level of expertise in React and a solid understanding of Bootstrap and Git. </p>
    </div>
  )
}

export default Card
