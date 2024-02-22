import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import UseCallback from './components/useCallback';
import UseMemo from './components/UseMemo';
import PopupComponent from './components/PopUpComponent';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/useeffect">UseEffect Component</Link>
            </li>
            <li>
              <Link to="/usereducer">UseReducer Component</Link>
            </li>
            <li>
              <Link to="/usestate">UseState Component</Link>
            </li>
            <li>
              <Link to="/usecallback">UseCallback Component</Link>
            </li>
            <li>
              <Link to="/usememo">UseMemo Component</Link>
            </li>
            <li>
              <Link to="/popup">Popup Component</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/popup" element={<PopupComponent name="Chirag" onClose={() => console.log("Closing")} position="center" />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the homepage!</p>
  </div>
);

export default App;
