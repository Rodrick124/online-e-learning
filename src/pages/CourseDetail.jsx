import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        const found = data.find((c) => c.id === Number(id));
        setCourse(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8">Loading course...</div>;
  if (!course) return <div className="p-8">Course not found.</div>;

  return (
    <div className="px-28 mx-auto p-8 bg-gray-100 rounded shadow">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
        <p className="text-black text-sm mb-6">{course.description}</p>
      </div>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-1/5 object-cover rounded mb-12"
      />
      <div className="flex gap-4 mb-4">
        <span className="bg-gray-200 px-3 py-1 rounded">{course.category}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.level}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.duration}</span>
      </div>

      {/* You can also show the curriculum if you'd like */}
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
        <ul className="grid grid-cols-2 justify-around list-decimal list-inside">
          {course.curriculum.map((topic, index) => (
            <li className="bg-white shadow-md p-4 rounded mb-4 mx-4" key={index}>
              {topic.title}
              <ul className="ml-4 list-none mt-10">
                {topic.subtopics?.map((sub, i) => (
                  <li key={i} className="flex justify-between items-center text-sm border-4 p-6 rounded mb-4 hover:border-orange-200">
                    <p>{sub.title}</p>
                    <p className="bg-gray-100 p-3 hover:bg-orange-200 rounded">{sub.duration}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;

