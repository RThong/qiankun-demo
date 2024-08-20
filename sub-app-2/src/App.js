// src/App.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Aa from './pages/Aa';
import Bb from './pages/Bb';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Aa</Link></li>
          <li><Link to="/Bb">Bb</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Aa />} />
        <Route path="/Bb" element={<Bb />} />
      </Routes>
    </div>
  );
};

export default App;
