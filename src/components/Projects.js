import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills built with React and Tailwind CSS.",
      link: "https://your-portfolio-link.com"
    },
    {
      title: "E-commerce Application",
      description: "An online shopping platform with features like user authentication, product listings, and a shopping cart, built using MERN stack.",
      link: "https://your-ecommerce-app-link.com"
    },
    {
      title: "Weather App",
      description: "A web application that provides weather updates and forecasts using the OpenWeather API, built with HTML, CSS, and JavaScript.",
      link: "https://your-weather-app-link.com"
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform where users can create and share posts, built with Node.js, Express, and MongoDB.",
      link: "https://your-blog-platform-link.com"
    },
    {
      title: "Task Management App",
      description: "A simple task management tool to help users track their tasks and productivity, built with React and Firebase.",
      link: "https://your-task-management-app-link.com"
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-8 px-4 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-semibold transition-colors duration-200">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
