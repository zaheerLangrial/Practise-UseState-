import React, { useState } from "react";


function UseStateExample () {
    const [count, setCount] = useState(0)
    //count = 0;
    function HandleClick () {
        setCount(count + 1)
    }
    //console.log("count ===>", count)
    
    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-sky-200">
            <div className="border border-gray-300 bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4">
                <h1 className="text-center px-2 py-1 border border-gray-300 rounded-full font-medium">{count}</h1>
                <button onClick={HandleClick} className="bg-gray-300 rounded shadow-md mt-2 hover:bg-gray-700 hover:text-white px-2 py-1 font-medium">Click me!</button>
            </div>
        </div>
        
    )
}
export default UseStateExample