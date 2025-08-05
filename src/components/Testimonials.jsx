import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    feedback: "These are groundbreaking courses! I loved every minute of it. The UI was easy to use, and the instructors were top-notch.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Front-End Learner",
  },
  {
    id: 2,
    name: "James R.",
    feedback: "The UI/UX Design course transformed how I design interfaces. It’s practical and easy to follow.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    title: "Freelance Designer",
  },
  {
    id: 3,
    name: "Megan K.",
    feedback: "Loved the mobile app development section. It helped me land my first freelance gig!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Junior Developer",
  },
  {
    id: 4,
    name: "Michael D.",
    feedback: "Advanced JavaScript explained everything so clearly. I’ve never felt more confident in coding.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "Full-Stack Developer",
  },
];

const Testimonials = () => (
  <section className="p-20 bg-white">
    <div className="text-center mb-10">
      <h3 className="text-2xl font-bold">Our Testimonials</h3>
      <p className="text-gray-600 mt-2">See what past students are saying about our courses</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 px-32 ">
      {testimonials.map(({ id, name, feedback, avatar, title }) => (
        <div key={id} className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <p className="text-gray-700 mb-4">"{feedback}"</p>
          <div className="flex items-center space-x-4">
            <img src={avatar} alt={name} className="w-12 h-12 rounded object-cover" />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
