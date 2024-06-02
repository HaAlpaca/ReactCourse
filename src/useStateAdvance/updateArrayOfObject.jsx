import {useState} from 'react'

function UpdateArrayOfState() {
    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c,newCar])
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((e,i) => i!==index))
    }
    const handleSetYear = (e) => {
        setCarYear(e.target.value)
    }
    const handleSetMake = (e) => {
        setCarMake(e.target.value)
    }
    const handleSetModel = (e) => {
        setCarModel(e.target.value)
    }
    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                )}
            </ul>

            <div>
                <input type="number" onChange={handleSetYear} />
                <input type="text" onChange={handleSetMake} />
                <input type="text" onChange={handleSetModel} />
                <button onClick={handleAddCar}>Add new Car</button>
            </div>
        </div>
    )
}

export default UpdateArrayOfState