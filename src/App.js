import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQs';
import Footer from './components/Footer';
import Sponsors from './components/sponsors';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/courses';
import CourseDetail from './pages/CourseDetail';
import HomeCourses from './components/HomeCourses';
import About from './pages/about';
import Contact from './pages/contact';

// Main App component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
              <HomeCourses />
              <Benefits />
              <Testimonials />
              <Pricing />
              <FAQ />
            </>
          }
        />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
