import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Random Meme Generator",
      description: "Developed a web application using React to generate random memes from a curated collection. Integrated with an external API to fetch meme templates dynamically. Implemented features for users to generate, view, and share memes effortlessly.",
      url: "https://github.com/rishabhgupta2004/random-meme-generator"
    },
    {
      title: "Drum Beats",
      description: "Proficient in creating and performing diverse drum beats across various musical genres. Skilled in maintaining rhythm, dynamics, and tempo consistency to enhance musical compositions and performances.",
      url: "https://github.com/rishabhgupta2004/drumbeats"
    },
    {
      title: "Shopify App",
      description: "Designed and developed a modern e-commerce application, 'Shopy,' using React to provide a seamless shopping experience. Implemented essential features such as product browsing, cart management, and secure checkout functionalities.",
      url: "https://github.com/rishabhgupta2004/SHOPIFY-APP"
    },
    {
      title: "Real Estate",
      description: "Developed a feature-rich real estate application using the MERN stack (MongoDB, Express.js, React, Node.js) that includes robust authentication functionalities and listing management capabilities. The application provides a secure and intuitive platform for users to browse, search, and manage property listings seamlessly.",
      url: "https://github.com/rishabhgupta2004/realestate"
    }
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-500 text-center">Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} url={project.url} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
      <a href={url} className="text-blue-500 font-bold hover:underline">{title}</a>
      <p className="text-lg font-semibold mt-2 mb-4">Description</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Projects;
