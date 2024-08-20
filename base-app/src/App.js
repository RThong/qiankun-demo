// src/App.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/subapp1">Sub App 1</Link></li>
          <li><Link to="/subapp2">Sub App 2</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subapp1/*" element={<div id="subapp-container"></div>} />
        <Route path="/subapp2/*" element={<div id="subapp-container"></div>} />
      </Routes>
    </div>
  );
};

export default App;
