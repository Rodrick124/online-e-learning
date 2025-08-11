import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="flex justify-between items-center px-32 py-16 bg-white dark:bg-gray-800 shadow-md text-gray-900 dark:text-gray-100">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto bg-orange-600 rounded p-2" />
        </Link>
        <ul className="flex space-x-4 text-lg font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded hover:underline">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          <Link to="/login">Login</Link>
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
