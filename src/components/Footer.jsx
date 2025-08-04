import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10 mt-10">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
      
      {/* Logo & Tagline */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-orange-400">🔥 Creative Courses</h4>
        <p className="text-gray-400">Empowering learners to unlock their creative potential through world-class online courses.</p>
      </div>

      {/* Navigation */}
      <div>
        <h5 className="text-orange-400 font-semibold mb-2">Quick Links</h5>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h5 className="text-orange-400 font-semibold mb-2">Resources</h5>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h5 className="text-orange-400 font-semibold mb-2">Follow Us</h5>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} Creative Courses. All rights reserved.
    </div>
  </footer>
);

export default Footer;
