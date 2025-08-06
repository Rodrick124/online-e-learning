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
    curriculum: [
      "Introduction to Web Design",
      "Understanding Layouts",
      "Color Theory Basics",
      "Typography in Web Design"
    ]
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
    curriculum: [
      "Introduction to UI/UX",
      "User Research Techniques",
      "Wireframing and Prototyping",
      "Usability Testing"
    ]
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
    curriculum: [
      "Setting Up React Native",
      "Building User Interfaces",
      "Integrating APIs",
      "Testing and Debugging"
    ]
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
    curriculum: [
      "Introduction to Graphic Design",
      "Design Tools Overview",
      "Color Theory Basics",
      "Typography in Graphic Design"
    ]
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
    curriculum: [
      "HTML Basics",
      "CSS Styling Techniques",
      "JavaScript Fundamentals"
    ]
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
    curriculum: [
      "Understanding ES6 Features",
      "Asynchronous JavaScript",
      "Error Handling in JavaScript"
    ]
  
  },
];

const CoursesPage = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50 px-40">
      <div className="mb-10 grid grid-cols-2 gap-4 my-8">
        <h3 className="text-4xl font-bold">Online Courses on Design and Development</h3>
        <p className="text-gray-600 text-sm mt-2">
          Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-8">
        {courses.map(course => (
          <div key={course.id} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden ">
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{course.description}</p>
                <button className="bg-gray-50 py-2 px-4 text-sm border rounded" onClick={() => navigate(`/courses/${course.id}`)}>
                  View Course
                </button>
              </div>
            </div>
            <div className='flex flex-wrap justify-evenly'>
            <img src={course.image} alt={course.title} className="w-auto h-72 object-cover " />
            <img src={course.image} alt={course.title} className="w-auto h-72 object-cover" />
            <img src={course.image} alt={course.title} className="w-auto h-72 object-cover" />
            </div>
            <div className='flex justify-between items-center p-4'>
              <div className="flex gap-2">
                <p className="text-gray-400 text-sm border p-2 rounded">{course.duration}</p>
                <p className="text-gray-400 text-sm border p-2 rounded">{course.level}</p>
              </div>
              <p>{course.author}</p>
            </div>
            <div className="p-8">
              <h5 className="text-md font-semibold">Curriculum</h5>
              <ul className="list-none mt-2 list-inside flex justify-between flex-wrap p-10">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;
