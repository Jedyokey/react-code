import React from 'react'
import {useState} from 'react'

const UpdateObject = () => {
    const [car, setCar] = useState({year: 2024, make: "Lexus", model: "ES350"});


    const handleYearChange = (event) => {
        // Note that we're working with the previous state of car
        setCar(c => ({...c, year: event.target.value}));
    }
    const handleMakeChange = (event) => {
        // Note that we're working with the previous state of car
        setCar(c => ({...c, make: event.target.value}));
    }
    const handleModelChange = (event) => {
        // Note that we're working with the previous state of car
        setCar(c => ({...c, model: event.target.value}));
    }

  return (
    <div>
      <p>Your favorite car is: {car.year} {car.make} {car.model} </p>

      <input type="number" value={car.year} onChange={handleYearChange} /><br />
      <input type="text" value={car.make} onChange={handleMakeChange} /><br />
      <input type="text" value={car.model} onChange={handleModelChange} /><br />
    </div>
  )
}

export default UpdateObject