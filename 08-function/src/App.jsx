import React, {useState} from 'react';

const App = () => {
  const [user, setUser] = useState('Guest');
  const handleChangeUser = () => {
    setUser(user === 'Guest' ? 'MD JAHIDUL ISLAM' : 'Guest');
  };

  function greetUser() {
    console.log(`Hello, ${user}! Have a nice day.`);
  }

  function mouseEnter(){
    console.log(`Mouse enter on ${user}`);
  }

  const welcome = () => {
    setUser('Rimi Khandokar');
  }
  
  return (
    <div className="flex flex-col items-center justify-center main-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline text-center uppercase mb-4">
        Hello {user}
      </h1>
      <button onClick={welcome} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Change User
      </button>
      
    </div>
  )
}

export default App