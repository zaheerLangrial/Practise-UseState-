import React, { useState } from "react";

function Dashbord() {
  const arr = [
    {
      title: "Intro To CSS",
      author: "Adam",
    },
    {
      title:
        "A long and winding Tour Of the History of UI Frameworks and Tools and the impact on Design",
      author: "Adam",
    },
    {
        title: "The Nawaz Shreef",
        author : "Zaheer Ahmad"
    }
  ];

  //{    useHook Example ===>
  //const [count , setCount] = useState(0);
  // let count = 12;
  // console.log(count)
  // function HandleClick () {

  //     setCount(count + 1)
  // }
  // console.log("Count====>" , count)

  //}

  const [modelisOpen , setModelisOpen] = useState(false)
  const [items , setItems] = useState(arr)


  function handleClick (e) {
    e.preventDefault();
    // console.log(e.target["title"].value)
    // console.log(e.target["authorName"].value)
    let Obj = {
        title : e.target["title"].value,
        author : e.target["authorName"].value
    }
    //console.log(Obj)
    items.push(Obj)
    //console.log(items)
    setItems([...items])
    setModelisOpen(false)
  }

 
  return (
    <div className="flex justify-center items-center min-h-screen">
        
      <div className="border border-gray-300 bg-state-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <button
                onClick={() => setModelisOpen(true)}
                type="submit"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                 Add 
              </button>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-700">Title</th>
              <th className="px-4 py-2 text-gray-700">Author</th>
              {/* 
                            
                                 useHook example==>
                            <th className="px-4 py-2 text-gray-700">count</th> */}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.title}
                </td>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.author}
                </td>
              </tr>
            ))}
            {/* <tr>
                            <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                Intro To CSS
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                Adam
                            </td>
                        </tr> */}
            {/* <tr>
                            <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                A long and winding Tour Of the History of UI Frameworks and Tools and the impact on Design
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                Adam
                            </td>



                            {/* 
                                    useHook example==>
                            <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                {count}
                            </td> 


                        </tr> */}
          </tbody>
        </table>
        {/* 
                
                
                                useHook example==>
                <button className="bg-gray-300 rounded shadow-md mt-2 hover:bg-gray-700 hover:text-white px-2 py-1 font-medium" onClick={HandleClick}>Click me!</button> */}
      </div>
      <BooksAdderModal modelisOpen={modelisOpen} setModelisOpen={setModelisOpen} handleClick={handleClick} />
    </div>
  );
}

export default Dashbord;

function BooksAdderModal(props) {
    const {modelisOpen, setModelisOpen , handleClick} = props;
  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class={`fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${modelisOpen === false && 'hidden'} `}
    >
      <div class="relative w-full max-w-md max-h-full shadow-md">
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
                onClick={() => setModelisOpen(false)}
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="text-center mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add a Book
            </h3>
            <form class="space-y-6" onSubmit={handleClick}>
              <div>
                <label
                  for="Title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter the Title......"
                  required
                />
              </div>
              <div>
                <label
                  for="Author"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="authorName"
                  id="authorName"
                  placeholder="Enter the Author Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-center items-center space-x-3">
              <button
                type="submit"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                 Add 
              </button>
              <button
                onClick={() => setModelisOpen(false)}
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
