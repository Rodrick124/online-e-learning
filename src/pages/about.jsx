import React from 'react';

const About = () => {
  return (
    <div className="px-28 mx-auto p-8 bg-gray-100 rounded shadow">
      <div className='flex justify-between my-16'>
        <h1 className="text-4xl font-bold text-center">About Skillbridge</h1>
        <p className="w-6/12 text-sm text-gray-700">
            Welcome to our e-learning platform! We are dedicated to providing high-quality online courses
            to help you achieve your learning goals. Our mission is to make education accessible and
            engaging for everyone, everywhere.
        </p>
      </div>
      <div className=''>
        <div className='my-8'>
            <h1 className="text-4xl font-bold mt-8 mb-2">Achievements</h1>
            <p className="w-full text-sm text-gray-700">
                Our platform has successfully helped thousands of learners achieve their goals. Here are some of our key achievements.
            </p>
        </div>
        <div className='my-8'>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 p-8'>
                <div className='flex flex-col gap-4 flex-wrap'>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Trusted by Thousands</h4>
                        <p className='text-sm py-4 text-gray-700'>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                    </li>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Award-winning Courses</h4>
                        <p className='text-sm py-4 text-gray-700'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                    </li>
                </div>
                <div className='flex flex-col gap-4 flex-wrap'>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Positive Student Feedback</h4>
                        <p className='text-sm py-4 text-gray-700'>We take pride in the positive feedback we receive from our students, who appreciate the quality and relevance of our courses.</p>
                    </li>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Industry Partnerships</h4>
                        <p className='text-sm py-4 text-gray-700'>We have established partnerships with leading companies and organizations to ensure our courses are aligned with industry needs and trends.</p>
                    </li>
                </div>
            </ul>
        </div>
      </div>
      <div className=''>
        <div className='my-8'>
            <h1 className="text-4xl font-bold mt-8 mb-2">Our Goal</h1>
            <p className="w-full text-sm text-gray-700">
                At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                Through our carefully crafted courses, we aim to
            </p>
        </div>
        <div className='my-8'>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 p-8'>
                <div className='flex flex-col gap-4 flex-wrap'>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Provide Practical Skills</h4>
                        <p className='text-sm py-4 text-gray-700'>We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
                    </li>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Faster Creative Problem-Solving</h4>
                        <p className='text-sm py-4 text-gray-700'>We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
                    </li>
                </div>
                <div className='flex flex-col gap-4 flex-wrap'>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Promote Collaboration and Community</h4>
                        <p className='text-sm py-4 text-gray-700'>We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
                    </li>
                    <li className='bg-white p-4 rounded shadow'>
                        <img src="/images/crown-fill.svg" alt=" crown filled icon" srcset="" className='p-2 my-4 bg-orange-100 rounded' />
                        <h4>Stay Ahead of the Curve</h4>
                        <p className='text-sm py-4 text-gray-700'>The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
                    </li>
                </div>
            </ul>
        </div>
        <div className='my-8 flex justify-between items-center gap-8 bg-white p-8 rounded m-8'>
            <div className='w-6/12'>
                <h2 className='py-1 text-3xl font-bold'><span className='text-orange-500 text-3xl font-bold'>Together</span>, let's shape the future of digital innovation</h2>
                <p className='text-sm py-1 text-gray-700'>Join us on this exciting learning journey and unlock your potential in design and development.</p>
            </div>
            <button className='bg-orange-500 text-white text-sm py-2 px-4 rounded'>Join Now</button>
        </div>

      </div>
    </div>
  );
};

export default About;
