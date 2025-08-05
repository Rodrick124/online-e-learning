import React from 'react';

const pricingPlans = [
  {
    id: 'free',
    title: 'Free Plan',
    price: '$0',
    period: '/month',
    features: [
      'Access to selected free courses.',
      'Limited course materials and resources',
      'Basic community support',
      'No certificate upon completion',
      'Ad-supported platform.',
    ],
    buttonText: 'Get Started',
    highlighted: false,
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    price: '$79',
    period: '/month',
    features: [
      'Unlimited course access',
      'Priority support from instructors',
      'Unlimited downloadable materials',
      'Certificate of completion',
      'Join live workshops',
      'Ad-free platform.',
      'Access to exclusive Pro Plan community forums.',
      'Early access to new courses and updates.',
    ],
    buttonText: 'Upgrade',
    highlighted: true,
  },
];

const Pricing = () => (
  <section className="py-16 bg-gray-50">
    <div className="text-center mb-10">
      <h3 className="text-2xl font-bold">Our Pricing</h3>
      <p className="text-gray-600 mt-2">Simple plans tailored to suit your learning needs</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
      {pricingPlans.map(plan => (
        <div
          key={plan.id}
          className={`p-6 border rounded-lg shadow-sm ${
            plan.highlighted ? 'bg-white border-orange-500 shadow-lg' : 'bg-white'
          }`}
        >
          <h4 className="text-lg font-bold text-center mb-2">{plan.title}</h4>
          <div className="text-3xl text-center mb-4 font-extrabold text-orange-500">
            {plan.price}
            <span className="text-sm font-normal text-gray-600">{plan.period}</span>
          </div>
          <h4 className="text-sm font-bold text-center mb-4">Available Features</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center p-2 border border-gray-50">
                <img src="/images/tick.svg" alt="check image" className="w-5 h-5 bg-orange-100" /> <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
