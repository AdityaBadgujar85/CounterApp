import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponents from './components/CLassComponents';

function App() {
  return (
    <div className="App">
      <h1 style={{color:'white'}}>Assignment-2 Counter Application</h1>
     <FunctionalComponent/>
     <ClassComponents/>
    </div>
  );
}

export default App;
