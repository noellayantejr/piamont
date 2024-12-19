import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import PreschoolRequirements from './pages/PreschoolRequirements/PreschoolRequirements';
import ElementaryRequirements from './pages/ElementaryRequirements/ElementaryRequirements';
import Gallery from './pages/Gallery/Gallery';
import AboutUs from './pages/AboutUs/AboutUs';
import Careers from './pages/Careers/Careers';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions/preschool" element={<PreschoolRequirements />} />
          <Route path="/admissions/elementary" element={<ElementaryRequirements />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
