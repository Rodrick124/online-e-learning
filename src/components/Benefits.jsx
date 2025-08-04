import React from 'react';

const benefits = [
  { id: 1, title: "Flexible Learning", desc: "Fit your coursework around your existing commitments and obligations.", image: "/images/icon.svg" },
  { id: 2, title: "Expert Instructors", desc: "Learn from industry professionals.", image: "/images/icon.svg" },
  { id: 3, title: "Diverse Offerings", desc: "Wide range of creative topics.", image: "/images/icon.svg" },
  { id: 4, title: "Updated Curriculum", desc: "Stay current with the latest trends.", image: "/images/icon.svg" },
  { id: 5, title: "Hands-on Practice", desc: "Apply skills in real projects.", image: "/images/icon.svg" },
  { id: 6, title: "Interactive Learning", desc: "Engage with quizzes & peers.", image: "/images/icon.svg" },
];

const Benefits = () => (
  <section className="py-16 bg-white styleme mb-10">
    <div className="mb-10">
      <h3 className="text-2xl font-bold">Benefits</h3>
      <div className='flex justify-between items-center'>
        <p className="text-sm text-gray-100 mt-2 w-2/3">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className='border p-2 rounded bg-white'>view all</button>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {benefits.map(b => (
        <div key={b.id} className=" grid border rounded p-6 shadow-sm gap-16">
          <h1 className='text-6xl  text-right font-bold'>0{b.id}</h1>
          <div>
            <h4 className="text-lg font-semibold mb-2">{b.title}</h4>
            <p className="text-gray-600 text-sm">{b.desc}</p>
          </div>
          <div className='justify-items-end'>
            <img src={b.image} alt="icon" srcset="" className='p-2 m-2 bg-gray-100 w-10 h-10 rounded' />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
