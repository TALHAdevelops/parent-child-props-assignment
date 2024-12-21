"use client"
import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className="text-7xl">{count}</h1>
            <button className="py-2 px-10 bg-blue-700 text-white rounded-md" onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-10 bg-red-700 text-white rounded-md ml-5" onClick={handleIncrement}>
                Decrement
            </button>
        </div>
    )
}

export default State
