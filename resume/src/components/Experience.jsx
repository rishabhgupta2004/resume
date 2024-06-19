import React from 'react';

const Experience = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="px-6 py-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Experience</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Intern</h3>
            <p className="text-lg text-gray-600 mb-2">CODSOFT</p>
            <p className="text-gray-600">2023</p>
            <p className="text-gray-700">Worked as a Python developer in which I created real-life projects.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Intern</h3>
            <p className="text-lg text-gray-600 mb-2">OCTANET</p>
            <p className="text-gray-600">2023</p>
            <p className="text-gray-700">Worked as a MERN developer and learned a lot during my internship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
