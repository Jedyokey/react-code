import React from 'react'
import {useState} from 'react'

const UpdateArrays = () => {
    const [foods, setFoods] = useState(["Apple", "Banana", "Carrot"]);
    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]); 
    }
    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }


    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]); 
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index)); 
    }
    const handleYearChange = (event) => {
        setCarYear(event.target.value);
    }
    const handleMakeChange = (event) => {
        setCarMake(event.target.value);
    }
    const handleModelChange = (event) => {
        setCarModel(event.target.value);
    } 
   

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>

      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => 
        <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model} 
        </li>)}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} /><br />
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /><br />
      <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /><br />
      <button onClick={handleAddCar}>Add Car</button>
        
    </div>
  )
}

export default UpdateArrays