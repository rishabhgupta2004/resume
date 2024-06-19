import React from 'react';
import { TiSocialGithubCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-blue-500 p-6 ">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center">
        <img
          src="https://avatars.githubusercontent.com/u/114092711?v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full sm:mr-6 mb-4 sm:mb-0"
        />
        <div className="text-white text-center sm:text-left">
          <h1 className="text-4xl font-bold">Rishabh Gupta</h1>
          <h2 className="text-2xl">MERN Developer</h2>
          <p className="text-lg">3/183 Adarsh Nagar, Shuklaganj, Unnao</p>
          <p className="text-lg">Email: rishabh78000gupta@gmail.com</p>
          <p className="text-lg">Phone: 7800038444</p>
          <div className="flex justify-center sm:justify-start mt-4 space-x-4">
            <SocialLink
              href="https://github.com/rishabhgupta2004"
              icon={<TiSocialGithubCircular size={24} className="mr-2" />}
              label="rishabhgupta2004"
            />
            <SocialLink
              href="https://linkedin.com/in/rishabhgupta2004"
              icon={<FaLinkedin size={20} className="mr-2" />}
              label="rishabhgupta2004"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-white text-blue-500 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors duration-300"
    >
      {icon}
      <span className="ml-2">{label}</span>
    </a>
  );
};

export default Home;
