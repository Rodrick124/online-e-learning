import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center px-32 py-16 bg-white shadow-md">
    <div className="flex items-center space-x-8">
      <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto bg-orange-600 rounded p-2 w-16 h-16" />
      <ul className="flex space-x-4 text-lg font-semibold">
        <li>Home</li>
        <li>Courses</li>
        <li>Testimonials</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div>
        <button className="text-grey px-4 py-2 rounded">Sign In</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  </nav>
);

export default Navbar;
