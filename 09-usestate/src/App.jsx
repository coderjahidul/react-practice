// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);
//   const [name, setName] = useState("Jahidul Islam");
//   const [status, setStatus] = useState("Please Login First");

//   const login = () => {
//     setStatus("Thank you for login");
//   }
//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <h1 className="text-5xl font-bold text-center text-shadow-black">Value of num is {num}</h1>
//       <h1 className="text-5xl font-bold text-center text-shadow-black">Name is {name}</h1>
//       <h2>{status}</h2>
//       <button className="btn text-2xl font-bold text-center text-shadow-black" onClick={()=>setNum(num+1)}>Increment</button>
//       <button className="btn text-2xl font-bold text-center text-shadow-black" onClick={()=>setName("Rimi Khandokar")}>Change Name</button>
//       <button className="btn text-2xl font-bold text-center text-shadow-black" onClick={login}>Login</button>
//     </div>
//   );
// }

// export default App

import React, { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }

  const decrement = () => {
    setNum(num - 1);
  }

  const reset = () => {
    setNum(0);
  }

  const multiple = () => {
    setNum(num * 2);
  }
  return (
    <div>
      <h2 className="text-7xl font-bold bg-gray-700 p-4 w-[235px] text-white text-center">{num}</h2>
      <div className="flex gap-4">
        <button onClick={increment} className="bg-black text-white p-4 m-0.5 hover:bg-blue-900 hover:text-white rounded-1xl">Increment</button>
        <button onClick={decrement} className="bg-black text-white p-4 m-0.5 hover:bg-blue-900 hover:text-white rounded-1xl">Decrement</button>
      </div>
      <button onClick={reset} className="bg-black text-white w-con p-4 m-0.5 hover:bg-blue-900 hover:text-white rounded-1xl">Reset</button>
      <button onClick={multiple} className="bg-black text-white w-con p-4 m-0.5 hover:bg-blue-900 hover:text-white rounded-1xl">Double</button>
    </div>
  )
}

export default App