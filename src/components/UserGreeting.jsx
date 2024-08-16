import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.username} </h2> 
  // } else {
  //   return <h2>Please login to continue</h2>
  // }

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2> 
  const loginPrompt = <h2 className="login-prompt">Please log in to continue!</h2>

  return (
    <div>
      <h2>Hi there</h2>
      {props.isLoggedIn ? welcomeMessage : loginPrompt}
    </div>
  )
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}

export default UserGreeting
