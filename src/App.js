import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Missions from './pages/Missions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
