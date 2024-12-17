import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Requirements from './pages/Requirements/Requirements';
import AcademicCalendar from './pages/AcademicCalendar/AcademicCalendar';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
