import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return <div className="p-8">Course not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>&larr; Back</button>
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded mb-6" />
      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-2">{course.author}</p>
      <div className="flex gap-4 mb-4">
        <span className="bg-gray-200 px-3 py-1 rounded">{course.category}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.level}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.duration}</span>
      </div>
      <p className="text-gray-700 mb-6">{course.description}</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded">Enroll Now</button>
    </div>
  );
};

export default CourseDetail;
