// src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Slack Clone App</h1>
        {/* <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav> */}
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
