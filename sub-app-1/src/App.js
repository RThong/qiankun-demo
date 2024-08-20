// src/App.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Foo</Link></li>
          <li><Link to="/Bar">Bar</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Foo />} />
        <Route path="/Bar" element={<Bar />} />
      </Routes>
    </div>
  );
};

export default App;
