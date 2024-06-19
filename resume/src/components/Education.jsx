import React from 'react';

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 py-8 px-4 sm:px-8 ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 ">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>

          {/* Education Entry 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Bachelor of Computer Application</h3>
            <p className="text-lg text-gray-600 mb-2">DR VIRENDRA SWARUP INSTITUTE OF COMPUTER STUDIES</p>
            <p className="text-gray-600">2021 - 2024</p>
          </div>

          {/* Education Entry 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Intermediate</h3>
            <p className="text-lg text-gray-600 mb-2">GPM SVM Inter college ganga nagar shuklaganj unnao</p>
            <p className="text-gray-600">2020 - 2021</p>
          </div>

          {/* Education Entry 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">High School</h3>
            <p className="text-lg text-gray-600 mb-2">GPM SVM Inter college ganga nagar shuklaganj unnao</p>
            <p className="text-gray-600">2018 - 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
