import { useState,useEffect } from "react"
import styles from './style.module.css'
function DigitalClock() {
    const [time,setTime] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        },1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])
    
    function formatTime() {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let second = time.getSeconds()
        const meridiem = hours >12 ? "PM" : "AM" 
        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)} ${meridiem}`
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }

    return (
        <div className={styles.Container}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock