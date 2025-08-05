import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQs';
import Footer from './components/Footer';
import Sponsors from './components/sponsors';
import './App.css';

// Main App component

function App() {
  return (
    <div className="MainApp">
      <Navbar />
      <Hero />
      <Sponsors />
       <div className="relative min-w-full h-auto my-10 px-20">
        <img src="/images/thumbnail.png" alt="Video Thumbnail" className="w-full h-full object-cover rounded-lg" />
        <video
          src="/videos/intro.mp4"
          className="hidden"
          controls
          poster="/images/thumbnail.png"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <img src="/images/play-button.svg" alt="Play Button" className="w-20 h-20 bg-gray-600 p-2 rounded-full" />
        </button>
      </div>
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
