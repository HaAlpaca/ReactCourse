import {useState} from 'react'

function UpdateArrayState() {
    const [foods,setFoods] = useState(["banana","orange","apple"])
    const handleAddFood = () => {
        const newFood = document.querySelector("#foodInput").value
        document.querySelector("#foodInput").value = ""
        setFoods(foods => [...foods,newFood])
    }
    const  handleRemoveFood = (index) => {
        setFoods(foods.filter((e,i) => i!== index))
    }
    
    return (
        <div>
            <h2>List of fruits</h2>
            <ul>
                {foods.map( (food,index) => 
                    <li key={index}
                    onClick={() => handleRemoveFood(index)}
                    >{food}</li>
                )}
            </ul>
 
            <input id="foodInput" type="text" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add new food</button>
        </div>
    )
}

export default UpdateArrayState