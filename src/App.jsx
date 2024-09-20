import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './progress.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
