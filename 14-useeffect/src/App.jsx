// import { useState, useEffect } from "react";

// function App() {
//   const [name, setName] = useState(0);
//   const [name1, setName1] = useState(0);

//   useEffect(() => {
//     console.log("useEffect is running...");
//   }, [name1]);

//   return (
//     <div>
//       <h1>Value of name is {name}</h1>
//       <h1>Value of name1 is {name1}</h1>

//       <button
//         onMouseEnter={() => setName(name + 1)}
//         onClick={() => setName1(name1 + 5)}
//       >
//         Click
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

const App = () => {
  const [a, setAvalue] = useState(0);
  const [b, setBvalue] = useState(0);
  function aChange(){
    console.log("A Value Changed");
  }

  function bChange(){
    console.log("B Value Changed");
  }

  useEffect(() => {
    aChange();
  }, [a]);

  useEffect(() => {
    bChange();
  }, [b]);

  return (
    <div>
      <h1>A Value of name is {a}</h1>
      <h1>B Value of name1 is {b}</h1>
      <button onClick={() => setAvalue(a + 1)}>Click</button>
      <button onClick={() => setBvalue(b + 2)}>Click</button>
    </div>
  )
}

export default App