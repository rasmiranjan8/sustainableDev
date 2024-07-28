import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Ensure content is below the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/assets/background.jpg)' }}><Signup /></div>} />
          <Route path="/login" element={<div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/assets/background.jpg)' }}><Login /></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
