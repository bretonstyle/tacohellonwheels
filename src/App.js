
import './App.css';
import NavBar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Stats from './Stats';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/stats" element={<Stats />} />
            </Routes>
        </Router>
        </div>
    </div>
     
  );
}

export default App;

