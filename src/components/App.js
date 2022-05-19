import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KeyFeatures from './pages/KeyFeatures';
import Pricing from './pages/Pricing';
import Testimonial from './pages/Testimonial';
import Demo from './pages/Demo';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }  exact />
        <Route path="features" element={<KeyFeatures/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="testimonial" element={<Testimonial/>} />
        <Route path="demo" element={<Demo/>} />
      </Routes>
    </div>
  );
}

export default App;
