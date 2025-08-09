import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="text-center mb-10 p-20 bg-gray-50">
    <h1 className="text-3xl font-bold mb-10">
      <span className="text-orange-700">Unlock</span> Your Creative Potential
    </h1>
    <h2 className="text-lg">with Online Design and Development Courses</h2>
    <p className="mb-10 text-gray-600">Join us and start your journey today!</p>
    <div className="flex justify-center space-x-4">
      <button className="bg-orange-500 text-white px-6 py-2 rounded"><Link to="/courses">Browse Courses</Link></button>
      <button className="border border-gray-400 px-6 py-2 rounded"><Link to="/pricing">View Pricing</Link></button>
    </div>
  </section>
);

export default Hero;
