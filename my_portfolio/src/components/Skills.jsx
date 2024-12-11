import React from 'react';

const ProfessionalSkills = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto text-center mb-10">
        {/* Section Title */}
        <h2 className="text-gray-500 text-5xl font-serif font-bold mb-2">PROFESSIONAL SKILLS</h2>
        <p className="text-3xl font-serif">
          <span className="text-blue-500">My</span> <span className="font-bold text-black">Talents</span>
        </p>
      </div>

      {/* Skills */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* First set of skills */}
        {/* Python */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">Python - 95%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Familiar with Python for web development and data analysis.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* SQL */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">SQL - 95%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Skilled in database management and query optimization with SQL.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* JavaScript */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">JavaScript - 85%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Experienced in building interactive web applications using JavaScript.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Space after first set */}
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mt-10">
        {/* Second set of skills */}
        {/* React */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">React - 85%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Proficient in building responsive user interfaces with React.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* HTML */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">HTML - 87%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Strong foundation in semantic HTML for structuring web content.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '87%' }}></div>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div>
          <h3 className="text-blue-500 text-2xl font-serif mb-2">Tailwind CSS - 70%</h3>
          <p className="text-gray-700 font-mono mb-2">
            Competent in using Tailwind CSS for modern, utility-first design in web projects.
          </p>
          <div className="w-full bg-gray-400 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
