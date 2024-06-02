
import {useState} from 'react'
function UseStateHookExample() {
    let [name,setName] = useState("Guest");
    let [age,setAge] = useState(0);
    let [isEmploy,setEmploy] = useState(false);
    const updateName = () => {
        setName("Bob")
        console.log(name);
    }
    const updateAge = () => {
        setAge(age+1)
        console.log(age); 
    }
    const toggleEmloy = () => {
        setEmploy(!isEmploy)
    }
    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>
            <div>
                <p>Age: {age}</p>
                <button onClick={updateAge}>Increase Age</button>
            </div>
            <div>
                <p>isEmploy: {isEmploy ? "Yes": "No"}</p>
                <button onClick={toggleEmloy}>Change Employ</button>
            </div>
        </>
    )
}

export default UseStateHookExample