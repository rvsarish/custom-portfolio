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
    <section id="projects" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-indigo-500 hover:underline mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
