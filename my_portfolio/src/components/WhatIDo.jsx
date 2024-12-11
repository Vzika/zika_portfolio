import React from 'react';

const WhatIDo = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto text-center mb-10">
        {/* Section Title */}
        <h2 className="text-gray-500 text-5xl font-bold mb-2 font-serif text-shadow-md">WHAT I DO</h2>
        <p className="text-3xl font-sans">
          <span className="text-blue-500">My</span> <span className="text-black">Services</span>
        </p>
      </div>

      {/* Services */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Backend Development */}
        <div className="bg-white p-8 shadow-lg rounded-lg relative">
          <h3 className="text-blue-500 text-3xl font-semibold mb-6 font-serif text-shadow-sm">Backend Development</h3>
          <p className="text-gray-700 font-mono">
            I specialize in backend development using Python, focusing on API integration and database management to create robust and scalable server-side solutions.
          </p>
          {/* Dotted pattern */}
          <div className="w-full h-6 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[length:8px_8px] absolute bottom-0 left-0"></div>
        </div>

        {/* Frontend Development */}
        <div className="bg-white p-8 shadow-lg rounded-lg relative">
          <h3 className="text-blue-500 text-3xl font-semibold mb-6 font-serif text-shadow-sm">Frontend Development</h3>
          <p className="text-gray-700 font-mono">
            Building responsive, user-friendly interfaces with React and Tailwind CSS, enhancing user experiences on web applications.
          </p>
          {/* Dotted pattern */}
          <div className="w-full h-6 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[length:8px_8px] absolute bottom-0 left-0"></div>
        </div>

        {/* Mentoring & Coaching */}
        {/* Mentoring & Coaching */}
        <div className="bg-white p-8 shadow-lg rounded-lg relative">
          <h3 className="text-blue-500 text-3xl font-semibold mb-6 font-serif text-shadow-sm">Mentoring & Coaching</h3>
          <p className="text-gray-700 font-mono">
            Providing mentorship and coaching, guiding individuals in improving their skills in web development and backend technologies through experience with <strong>CODE YOUR FUTURE</strong>.
          </p>
          {/* Dotted pattern */}
          <div className="w-full h-6 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] bg-[length:8px_8px] absolute bottom-0 left-0"></div>
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;
