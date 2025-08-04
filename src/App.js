import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQs';
import Footer from './components/Footer';
import './App.css';

// Main App component

function App() {
  return (
    <div className="MainApp">
      <Navbar />
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
