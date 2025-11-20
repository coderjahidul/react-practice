// import React, { useState } from 'react'

// function App() {
//   const [todos, setTodos] = useState([]) // state to store fetched data

//   async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//     const data = await response.json()
//     setTodos(data) // save data in state
//   }

//   return (
//     <div className='p-10'>
//       <button 
//         className='bg-slate-500 cursor-pointer py-2 px-5 text-white font-bold rounded-2xl mb-5'
//         onClick={getData}
//       >
//         Get Data
//       </button>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className={`mb-2 p-2 border rounded-md ${todo.completed ? 'bg-green-50' : 'bg-red-50'}`}>
//             <span className='font-semibold'>{todo.id}.</span> {todo.title} 
//             <span className={`ml-2 px-2 py-1 rounded ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`}>
//               {todo.completed ? 'Completed' : 'Pending'}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


// import axios from 'axios'
// import React, { useState } from "react";


// const App = () => {
//   const [todos, setTodos] = useState([]) // state to store fetched data
//   const getData = async () => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     setTodos(response.data);
//   }
//   return (
//     <div className='p-10'>
//       <button 
//         className='bg-slate-500 cursor-pointer py-2 px-5 text-white font-bold rounded-2xl mb-5'
//         onClick={getData}
//       >
//         Get Data
//       </button>

//       <ul>
//          {todos.map(todo => (
//            <li key={todo.id} className="mb-2 p-2 border rounded-md ">
//              <span className='font-semibold'>{todo.id}.</span> {todo.title} 
//              <span className={`ml-2 px-2 py-1 rounded ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`}>
//                {todo.completed ? 'Completed' : 'Pending'}
//              </span>
//            </li>
//          ))}
//        </ul>

//     </div>

//   )
// }

// export default App


import axios from 'axios'
import React, { useState } from "react";

const App = () => {

  const [picsum, setPicsum] = useState([])
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    setPicsum(response.data)
    console.log(response.data);
  }

  return (
    <div className='p-10'>
      <button 
        className='bg-slate-500 cursor-pointer py-2 px-5 text-white font-bold rounded-2xl mb-5'
        onClick={getData}
      >
        Get Data
      </button>

      {/* image box */}
      <div className='grid grid-cols-3 gap-4'>
        {
          picsum.map(pics => (
            <img className="w-100 h-50" key={pics.id} src={pics.download_url} alt={pics.author} />
          ))
        }
      </div>
     </div>
  )
}

export default App