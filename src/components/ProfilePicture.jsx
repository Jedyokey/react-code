import React from 'react'

const ProfilePicture = () => {
    const imageUrl = './src/images/Picture-2.jpg';
    // const handleClick = (e) => console.log("OUCH!");
    const handleClick = (e) => e.target.style.display = "none";

  return (
    <>
        <img onClick={(e) => handleClick(e)} src={imageUrl} style={{width:250, height: 200}} />
    </>
  )
}

export default ProfilePicture
