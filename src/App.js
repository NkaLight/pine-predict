import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import navIcon from "./icons/navbarIcon.svg"
import Landing from "./Pages/Landing"
import MapView from "./Component/MapView"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="nav-title-section">
              <img src={navIcon} alt="" srcset="" className="nav-icon" />
              <div className="nav-title">Wilding Pines in Canterbury</div>
          </div>
          <div className="nav-links-section">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Donate</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
