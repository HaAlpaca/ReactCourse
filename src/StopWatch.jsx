import { useEffect,useState,useRef } from "react"

function StopWatch() {
    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(()=> {
                setElapsedTime(Date.now()-startTimeRef.current)
            },10)
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    },[isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
        console.log(startTimeRef.current);
    }
    function stop() {
        setIsRunning(false)
    }
    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor(elapsedTime / (1000*60)%60);
        let seconds = Math.floor(elapsedTime / (1000)%60);
        let miliseconds = Math.floor(elapsedTime %1000 /10);

        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        miliseconds = String(miliseconds).padStart(2,"0")
        return `${hours}:${minutes}:${seconds}:${miliseconds}`
    }

    return ( 
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-btn">
                    start
                </button>
                <button onClick={reset} className="start-btn">
                    reset
                </button>
                <button onClick={stop} className="start-btn">
                    stop
                </button>
            </div>
        </div>
    )
}
export default StopWatch