import { useState } from "react";
import styles from './ColorPicker.module.css'
function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF")
    const handleChangeColor= (e) => {
        setColor(e.target.value)
    }
    return (
        <div className={styles.container}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label >Select a Color:</label>
            <input type="color" value={color} onChange={handleChangeColor} />
        </div>
    )   
}

export default ColorPicker