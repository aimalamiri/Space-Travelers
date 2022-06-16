import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import About from './pages/About';
import Missions from './pages/Missions';
import './App.css';
import Rockets from './pages/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="py-5">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
