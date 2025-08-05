import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10 mt-10">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 text-sm py-10">
      
      {/* Logo & Tagline */}
      <div>
        <img src="/images/logo.svg" alt="Creative Courses Logo" className='bg-orange-500 p-2 rounded mb-5' />
        <ul>
          <li className="mt-2">hello@skillbridge.com</li>
          <li className="mt-2">+91 91813 23 2309</li>
          <li className="mt-2">somewhere in the world</li>
        </ul>
      </div>

      <div className='grid grid-cols-3 gap-10'>
        {/* Navigation */}
          <div>
            <h5 className="text-orange-400font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold mb-2">Resources</h5>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="font-semibold mb-2">Social Profiles</h5>
            <ul className="space-y-1 text-gray-300 grid grid-cols-3 gap-2">
              <li><a href="#"><img src="/images/facebook.svg" alt="Facebook" className='bg-white p-2 rounded' /></a></li>
              <li><a href="#"><img src="/images/twitter.svg" alt="Twitter" className='bg-white p-2 rounded' /></a></li>
              <li><a href="#"><img src="/images/linkedin.svg" alt="LinkedIn" className='bg-white p-2 rounded' /></a></li>
            </ul>
          </div>
        </div>
      </div>

    <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} Creative Courses. All rights reserved.
    </div>
  </footer>
);

export default Footer;
