// import React, {useState} from 'react';
// import Counter from './composers/Counter';
// import TimeDisplay from './composers/Time';
// import Button from './composers/Alert';
// import ProductList from './composers/Product';

// const App = () => {
//   const [user, setUser] = useState('Guest');
//   const handleChangeUser = () => {
//     setUser(user === 'Guest' ? 'MD JAHIDUL ISLAM' : 'Guest');
//   };

//   function greetUser() {
//     console.log(`Hello, ${user}! Have a nice day.`);
//   }

//   function mouseEnter(){
//     console.log(`Mouse enter on ${user}`);
//   }

//   const welcome = () => {
//     setUser('Rimi Khandokar');
//   }

//   // const User = (props) => {
//   //   return <h2>Welcome, {props.name}</h2>
//   // }

//   const Message = ({ loggedIn }) => {
//     return loggedIn ? <h2>Welcome back!</h2> : <h2>Please log in</h2>;
//   }

//   const User = ({ name }) => {
//     return <h2>Welcome, {name}, Have a nice day</h2>;
//   }
  
//   return (
//     <div className="flex flex-col items-center justify-center main-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold underline text-center uppercase mb-4">
//         Hello {user}
//       </h1>
//       <button onClick={welcome} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//         Change User
//       </button>
//       <User name= "Salma Akter"/>
//       <Counter/>
//       <div>
//         <TimeDisplay/>
//       </div>
//       <div>
//         <Button/>
//       </div>
//       <ProductList/>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("Sabuz");

  const changeUser = () => {
    setUser(user === "Sabuz" ? "MD Jahidul Islam" : "Sabuz");
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Hello, {user}</h1>
      <button 
        onClick={changeUser}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >Change User</button>
    </div>
  );
}

export default App