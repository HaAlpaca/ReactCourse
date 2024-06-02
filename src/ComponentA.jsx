import { createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext()

function ComponentA() {
    const user = "Alpaca"
    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>hello {user}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA