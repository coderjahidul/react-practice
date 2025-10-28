import './App.css'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App(){
  return (
    <div>
      <Navbar/>
      <Card name="John Doe"/>
      <Card name="Jahidul Islam"/>
    </div>
  );
}

export default App;
