import {useState} from 'react'

function OnchangeEvent() {
    const [name,setName] = useState("Guest")
    const [quantity,setQuantity] = useState(0)
    const [option,setOption] = useState("")
    const [shipping,setShipping] = useState("")

    function handleEventChange(event) {
        setName(event.target.value)
    }


    function handleQuantityEventChange(event) {
        setQuantity(event.target.value)
    }

    function handleOptionChange(event) {
        setOption(event.target.value)
    }
    
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    
    return (
        <div>
            <input type="text" value={name} onChange={handleEventChange} />
            <p>Name: {name}</p>
            <br />
            <input type="number" value={quantity} onChange={handleQuantityEventChange} />
            <p>Name: {quantity}</p>

            <select name="" id="" onChange={handleOptionChange}>
                <option >Alpaca</option>
                <option >Llama</option>
                <option >Camel</option>
            </select>
            <p>Name: {option}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                onChange={handleShippingChange}
                />  
                Pickup
            </label>
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                onChange={handleShippingChange}
                />  
                Delivery
            </label>

            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default OnchangeEvent