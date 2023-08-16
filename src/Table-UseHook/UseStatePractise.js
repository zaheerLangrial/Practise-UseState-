import React, { useState } from "react";

function UseStateHookPractise () {
    const [color, setColor] = useState("black")
    return (
        <div className=" flex justify-center items-center border border-gray-300 bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4">
            <div>
            <h1>My fav Color is : {color}!</h1>
            <div className="flex space-x-4  justify-center items-center">
                <button className="bg-sky-300 text-white font-medium hover:bg-sky-500 rounded shadow-md"
                type="button"
                onClick={() => setColor("red")}>
                    Red
                </button>
                <button className="bg-sky-300 text-white font-medium hover:bg-sky-500 rounded shadow-md"
                type="button"
                onClick={() => setColor("green")}>
                    Green
                </button>
            </div>
            
            </div>
        </div>
    )
}
export default UseStateHookPractise;
