// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState(10);
//   const [user, setUser] = useState({name: 'John', age: 30, email: 'WVc9w@example.com'});
//   const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

//   // add item
//   const addItem = () => {
//     setItems([...items, "Mango"]);
//   }

//   const btnClicked = () => {
//     setNum(prev => (prev + 1));
//     setNum(prev => (prev + 1));
//     setNum(prev => (prev + 1));
//   }

//   const changeUserData = () => {
//     setUser({
//       ...user,
//       name: 'Jahidul Islam',
//       age: 25,
//       email: 'VvYJU@example.com'
//     });
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
//       <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center">
//         <h1 className="text-4xl font-bold text-blue-600 mb-4">{num}</h1>
//         <button
//           onClick={btnClicked}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Click
//         </button>
//       </div>

//       <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center">
//         <h1 className="text-2xl font-semibold text-gray-700">{user.name}</h1>
//         <h1 className="text-lg text-gray-500 mb-4">Email: {user.email}</h1>
//         <h1 className="text-lg text-gray-500 mb-4">Age: {user.age}</h1>
//         <button
//           onClick={changeUserData}
//           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Change User Data
//         </button>
//       </div>

//       <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center">
//         <h1 className="text-2xl font-semibold text-gray-700">Items</h1>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index} className="text-lg text-gray-500 mb-2">
//               {item}
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={addItem}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Add Item
//         </button>
//       </div>
//     </div>
//   )

// }

// export default App

// import React, { useState } from "react";

// function App() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);
//   const [c, setC] = useState(0);

//   const handleClick = () => {
//     setA(a + 1);
//     setB(b + 2);
//     setC(c + 3);
//     console.log("a:", a, "b:", b, "c:", c);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center">
//         <h1 className="text-2xl font-semibold text-gray-700 mb-4">Example</h1>
//         <p className="text-gray-600 mb-2">a: {a}</p>
//         <p className="text-gray-600 mb-4">b: {b}</p>
//         <p className="text-gray-600 mb-4">c: {c}</p>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           onClick={handleClick}
//         >
//           Click Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input 
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="text-4xl font-bold text-blue-600 mb-4">Counter: {count}</h2>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => setCount(count + 1)}>➕ Increase</button>
//       <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300" onClick={() => setCount(count - 1)}>➖ Decrease</button>
//       <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300" onClick={() => setCount(0)}>🔁 Reset</button>
//     </div>
//   );
// }

// export default App;
import React, { createContext, useContext } from 'react'
import TimeShow from "./components/TimeShow"
import FocusInput from './components/FocusInput';
import Calculation from './components/Calculation';

const UserContext = createContext();

const Child = () => {
  const user = useContext(UserContext);
  return (
    <h2>Hello, {user}</h2>
  )
}

const App = () => {
  return (
      <TimeShow />,
      <UserContext.Provider value="Jahidul Islam">
        <Child />
      </UserContext.Provider>,
      <FocusInput />,
      <Calculation/>
  );
};

export default App