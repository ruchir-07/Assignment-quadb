import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import image from './1637757772814.jpg';
import EntryState from './context/EntryState';

function App() {
  return (
    <div className="p-3 mb-2 bg-dark-subtle text-emphasis-dark">
      <EntryState>
        <Navbar/>
        <img src={image} className="rounded mx-auto d-block m-2" alt="..."></img>
        <Table/>
      </EntryState>
    </div>
  );
}

export default App;
