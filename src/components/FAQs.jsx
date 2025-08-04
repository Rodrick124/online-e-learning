import React, { useState } from 'react';

const faqs = [
  {
    question: "What do I get with the Free Plan?",
    answer: "With the Free Plan, you get access to a limited selection of courses, video content, and basic support.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes! You can cancel your subscription anytime from your dashboard without any hidden fees.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Yes, if you’re on the Pro Plan, you’ll receive a certificate of completion for every course you finish.",
  },
  {
    question: "Are the courses beginner-friendly?",
    answer: "Absolutely! We have content for all levels, from beginner to advanced. You can filter by difficulty.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
        <p className="text-gray-600 mt-2">Everything you need to know before you start learning</p>
      </div>
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
