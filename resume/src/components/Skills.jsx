import React from 'react';

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python"];

  return (
    <div className="flex flex-col sm:flex-row items-center p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="px-6 py-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-700">
            {skills.map((skill, index) => (
              <li key={index} className="list-disc list-inside">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
