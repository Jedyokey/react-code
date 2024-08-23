// onChange = event handler used primarily with form elements
//            e.g: <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes
import React, {useState} from 'react'

const OnChange = () => {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }
    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea name="" id="" value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
        <p>Comment: {comment}</p>

        <select name="" id="" value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Verve">Verve</option>
            <option value="Paypal">Paypal</option> 
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pick Up
        </label>

        <label htmlFor="">
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>

        <p>Shipping: {shipping}</p>
        
      
    </div>
  )
}

export default OnChange
