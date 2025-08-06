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
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-2">{course.author}</p>
      <div className="flex gap-4 mb-4">
        <span className="bg-gray-200 px-3 py-1 rounded">{course.category}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.level}</span>
        <span className="bg-gray-200 px-3 py-1 rounded">{course.duration}</span>
      </div>
      <p className="text-gray-700 mb-6">{course.description}</p>

      {/* You can also show the curriculum if you'd like */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
        <ul className="list-disc list-inside space-y-4">
          {course.curriculum.map((topic, index) => (
            <li key={index}>
              <p className="font-medium">{topic.title} ({topic.duration})</p>
              <p className="text-gray-600">{topic.description}</p>
              <ul className="ml-4 list-disc">
                {topic.subtopics?.map((sub, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    {sub.title} – {sub.duration}
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

