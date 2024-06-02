
import {useRef,useEffect } from "react"
function UseRefBasic() {
    let ref = useRef(null)
    useEffect(() => {
        console.log("component re-render");
    })
    const handleClick = () => {
        ref.current.focus()
        ref.current.style.backgroundColor = "yellow"
        console.log(ref.current);
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
            <input type="text" ref={ref}/>

        </div>
    )
}

export default UseRefBasic