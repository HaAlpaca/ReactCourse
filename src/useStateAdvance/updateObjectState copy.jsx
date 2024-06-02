import {useState} from 'react'

function UpdateObjectState() {
    const [car,setCar] = useState({
        year: 2024,
        make: "Tesla",
        model: "Model 3"
    })

    const updateCarYear = (e) => {
        setCar(c => ({...c,year:e.target.value}))
    }
    const updateCarMake = (e) => {
        setCar(c => ({...c,make:e.target.value}))
    }
    const updateCarModel = (e) => {
        setCar(c => ({...c,model:e.target.value}))
    }
    return (
        <div>
            <p>My favorite car: {car.year} {car.make} {car.model}</p>
            <br />

            <input type="number" value={car.year} onChange={updateCarYear}/>
            <input type="text" value={car.make} onChange={updateCarMake}/>
            <input type="text" value={car.model} onChange={updateCarModel}/>
        </div>
    )
}

export default UpdateObjectState