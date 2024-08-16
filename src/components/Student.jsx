import React from 'react'
import PropTypes from 'prop-types'

// propsType = a mechanism that ensures that the passed value is of the correct 
//             datatype
//             age: PropsType.number

const Student = (props) => {
    const student = {
        fontFamily: "Arial, san-serif",
        fontSize: "2em",
        padding: "10px",
        border: "1px solid black",
        width: "auto",
        margin: "10px 20px",
        display: "inline-block"
    }

  return (
    <>
        <h1>...props</h1>
        <div className="student" style={student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    </>
  )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest", 
    age: 0,
    isStuent: false
}

export default Student
