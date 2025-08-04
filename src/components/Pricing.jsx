import React from 'react';

const pricingPlans = [
  {
    id: 'free',
    title: 'Free Plan',
    price: '$0',
    period: '/month',
    features: [
      'Access limited courses',
      'Basic support',
      'View video content',
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
      'Priority support',
      'Downloadable materials',
      'Certificate of completion',
      'Join live workshops',
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
          <h4 className="text-lg font-bold mb-2">{plan.title}</h4>
          <div className="text-3xl font-extrabold text-orange-500">
            {plan.price}
            <span className="text-base font-medium text-gray-600">{plan.period}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                ✅ <span className="ml-2">{feature}</span>
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
