import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup validation logic here
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Simulate signup success
    navigate('/courses');
  };

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-40 min-h-screen">
      <div className='flex justify-between items-center gap-10'>
        <div className='w-6/12 bg-white p-8 rounded-lg shadow-md'>
            <div>
                <h2 className="text-3xl font-bold mb-2">Students Testimonials</h2>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className='m-8 flex flex-col gap-8'>
                <p className='text-sm text-gray-600'>
                   The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it! 
                </p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="profile image" className='w-12 h-12 rounded' referrerPolicy="no-referrer"/>
                        <p className='text-sm'>Sarah L.</p>
                    </div>
                    <button className='bg-gray-200 p-2 rounded'>Read More</button>
                </div>
                <div className='flex gap-4 justify-end'>
                    <img src="/images/arrow1.svg" alt="arrow" className='w-10 h-10 bg-gray-100 hover:bg-gray-200'/>
                    <img src="/images/arror2.svg" alt="arrow" className='w-10 h-10 bg-gray-100 hover:bg-gray-200'/>
                </div>
            </div>
        </div>
        <div className=''>
            <div className="w-full mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-600 text-sm">Create an account to unlock exclusive features.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                {error}
                </div>
            )}

            <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-2">
                Full Name
                </label>
                <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                autoComplete="email"
                required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
                required
                />
            </div>

            <div className="flex text-sm">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-500 hover:text-blue-600">
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-500 hover:text-blue-600">
                    Privacy Policy
                </Link>
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
                Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 my-4">OR</p>

            <button
                type="button"
                className="w-full bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
            >
                Sign Up with Google
            </button>

            <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-600">
                Login
                </Link>
            </div>
            </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
