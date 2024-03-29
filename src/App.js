import logo from './ferrari.jpg';
import './App.css';
import Members from './members';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Taco Hell On Wheels Placeholder
        </p>
      </header>
      <Members />
    </div>
  );
}

export default App;

