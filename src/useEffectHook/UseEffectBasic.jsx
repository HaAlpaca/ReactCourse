import { useEffect,useState } from "react"
import styles from './style.module.css'

// use effect(() => {}) run after every re-render
// use effect(() => {},[]) run only on mount
// use effect(() => {},[value]) run on mount + when value change

function UseEffectBasic() {
    const [count,setCount] = useState(0)
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    },[count,color])
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(0)
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red": "green")
        
    }
    return (
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay} style={{color: color}}>{count}</p>
            <button className={styles.countBtn} onClick={decrement}>Decrement</button>
            <button className={styles.countBtn} onClick={reset}>Reset</button>
            <button className={styles.countBtn} onClick={increment}>Increment</button>
            <button className={styles.countBtn} onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default UseEffectBasic