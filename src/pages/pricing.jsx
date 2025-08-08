import React from 'react';
import { useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQs';

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '$9.99',
    duration: '/month',
    description: 'Perfect for beginners',
    features: [
      'Access to all basic courses',
      'Basic project files',
      'Community support',
      'Monthly webinars',
      '24/7 Support',
    ],
    recommended: false
  },
  {
    id: 2,
    name: 'Pro',
    price: '$19.99',
    duration: '/month',
    description: 'Most popular choice',
    features: [
      'Access to all basic & pro courses',
      'Advanced project files',
      'Priority community support',
      'Weekly webinars',
      'One-on-one mentoring',
      'Certification on completion'
    ],
    recommended: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$49.99',
    duration: '/month',
    description: 'For teams and businesses',
    features: [
      'Access to all courses',
      'Custom learning paths',
      'Team collaboration tools',
      'Analytics dashboard',
      'Dedicated account manager',
      'Custom certificates',
      'API access'
    ],
    recommended: false
  }
];

const Pricingspage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-40">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Pricing</h2>
        <p className="w-6/12 text-sm text-gray-600">
            Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </p>
      </div>

      <div className='flex justify-center space-x-4 m-28'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded'>Monthly</button>
        <button className='px-4 py-2 bg-gray-200 text-gray-800 rounded'>Yearly</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-16">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col bg-white p-8 rounded-lg shadow-md ${
              plan.recommended ? 'border-2 border-blue-500' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Recommended
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.duration}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/signup')}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                plan.recommended
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
        <FAQ />
    </section>
  );
};

export default Pricingspage;
