
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center px-32 py-16 bg-white shadow-md">
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
    <div>
        <button className="text-grey px-4 py-2 rounded">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          <Link to="/login">Login</Link>
        </button>
    </div>
  </nav>
);

export default Navbar;
