import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
function App() {
  const user = 'Jahidul Islam';
  const user1 = 'Rimi Khandokar';
  const user2 = 'Salma Akter';
  const user3 = 'Sadia Akter';
  const user4 = 'Shagor';
  return (
    <div>
      <Navbar/>
      <Card user={user} age={20}/>
      <Card user={user1} age={21}/>
      <Card user={user2} age={22}/>
      <Card user={user3} age={23}/>
      <Card user={user4} age={24}/>
      <Navbar/>
    </div>
  );
}

export default App;
