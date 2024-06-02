import {useState} from 'react'
import styles from './counter.module.css'

function Counter() {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay}>{count}</p>
            <button className={styles.countBtn} onClick={decrement}>Decrement</button>
            <button className={styles.countBtn} onClick={reset}>Reset</button>
            <button className={styles.countBtn} onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter