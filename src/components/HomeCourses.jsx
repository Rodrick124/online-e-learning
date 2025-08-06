import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    author: "By John Smith",
    category: "Design",
    level: "Beginner",
    duration: "4h 30m",
    image: "/images/web design.png",
    description: "Learn the basics of web design, including layout, color theory, and typography.",
  },
  {
    id: 2,
    title: "UI/UX Basics",
    author: "By Emily Johnson",
    category: "UI/UX",
    level: "Intermediate",
    duration: "3h 15m",
    image: "/images/UiUx.png",
    description: "Understand user interface and user experience design principles to create intuitive applications.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    author: "By Michael Brown",
    category: "Mobile",
    level: "Intermediate",
    duration: "5h 10m",
    image: "/images/mobile app.png",
    description: "Build your first mobile application using React Native, covering both Android and iOS platforms.",
  },
  {
    id: 4,
    title: "Graphic Design for Beginners",
    author: "By Rachel Lee",
    category: "Design",
    level: "Beginner",
    duration: "2h 45m",
    image: "/images/graphic design.png",
    description: "Explore the fundamentals of graphic design, including tools and techniques for creating stunning visuals.",
  },
  {
    id: 5,
    title: "Front-End Web Development",
    author: "By David Adams",
    category: "Frontend",
    level: "Intermediate",
    duration: "6h 00m",
    image: "/images/frontend.png",
    description: "Dive into HTML, CSS, and JavaScript to build responsive and interactive web pages.",
  },
  {
    id: 6,
    title: "Advanced JavaScript",
    author: "By Jennifer Wilson",
    category: "JavaScript",
    level: "Advanced",
    duration: "7h 20m",
    image: "/images/ad javascript.png",
    description: "Master advanced JavaScript concepts, including ES6 features, asynchronous programming, and more.",
  },
];

const HomeCourses = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50 px-40">
      <div className="mb-10"> 
          <h3 className="text-2xl font-bold">Our Courses</h3>
          <div className='flex justify-between items-center'>
            <p className="text-gray-600 mt-2">Check out some of our top courses</p>
            <button className="text-white text-sm border px-6 py-2 rounded hover:bg-orange-300" onClick={() => navigate('/courses')}>
              View All
            </button>
          </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.slice(0, 3).map(course => (
          <div key={course.id} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className='flex justify-between items-center p-4'>
              <div className="flex gap-2">
                <p className="text-gray-400 text-sm border p-2 rounded">{course.duration}</p>
                <p className="text-gray-400 text-sm border p-2 rounded">{course.level}</p>
              </div>
              <p>{course.author}</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
              <p className="text-sm text-gray-500">{course.description}</p>
            </div>
            <div className="p-4">
              <button className="bg-gray-100 text-white py-2 px-4 rounded w-full hover:bg-orange-300" onClick={() => navigate(`/courses/${course.id}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCourses;
