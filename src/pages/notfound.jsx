import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-7xl font-extrabold mb-4">404</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
      The page you are looking for does not exist or has been moved.
    </p>
    <div className="flex gap-4">
      <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
        Go Home
      </Link>
      <Link
        to="/courses"
        className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Browse Courses
      </Link>
    </div>
  </section>
);

export default NotFound;
