// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

registerMicroApps([
  {
    name: 'sub-app-1',
    entry: '//localhost:3011', // 子应用入口
    container: '#subapp-container',
    activeRule: '/subapp1',
  },
  {
    name: 'sub-app-2',
    entry: '//localhost:3012',
    container: '#subapp-container',
    activeRule: '/subapp2',
  },
]);
start();

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
