import "./App.css";
import { Home } from "./components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>React App with Routing</h1>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div>
                <h2>About Us</h2>
                <p>This is a basic React app with routing!</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
