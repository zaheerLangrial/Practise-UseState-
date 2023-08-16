import React, { useState } from "react";

function W3SchoolHooksExample() {
  const [color, setColor] = useState("black");
  return (
    <div className="flex flex space-x-4 justify-center items-center w-full min-h-screen bg-sky-200">
      <div className=" border border-gray-300 bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4">
        <h1 className="text-center">My favorite color is {color}!</h1>
        <div className=" flex space-x-4">
          <button
            className="bg-sky-300 rounded shadow-md mt-2 hover:bg-blue-700 hover:text-white px-2 py-1 font-medium"
            type="button"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-red-300 rounded shadow-md mt-2 hover:bg-red-700 hover:text-white px-2 py-1 font-medium"
            type="button"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-gray-500 rounded shadow-md mt-2 hover:bg-black-700 hover:text-white px-2 py-1 font-medium"
            type="button"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="bg-green-300 rounded shadow-md mt-2 hover:bg-green-700 hover:text-white px-2 py-1 font-medium"
            type="button"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}
export default W3SchoolHooksExample;
