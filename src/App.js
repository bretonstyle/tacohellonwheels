import logo from './ferrari.jpg';
import './App.css';
import Members from './Members';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <div>
      <NavBar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Taco Hell On Wheels Placeholder
      </p>
      {/* <Members /> */}
      </div>
    </div>
  );
}

export default App;

