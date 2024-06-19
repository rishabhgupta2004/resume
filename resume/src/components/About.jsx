import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="px-6 py-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a highly skilled and experienced computer programmer, I am passionate about writing
            code and developing high-quality software that meets the needs of my clients. My strong
            background in computer science, coupled with my commitment to using the best
            programming practices and tools available, makes me a valuable asset to any software
            development team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
