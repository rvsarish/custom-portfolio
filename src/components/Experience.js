import React from "react";

const Experience = () => {
  const experienceList = [
    { title: "Job Title 1", company: "Company Name 1", duration: "Jan 2020 - Present", description: "Description of responsibilities and achievements." },
    { title: "Job Title 2", company: "Company Name 2", duration: "Jan 2018 - Dec 2019", description: "Description of responsibilities and achievements." },
  ];

  return (
    <section id="experience" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">Experience</h2>
      <div className="space-y-4">
        {experienceList.map((job, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-600">{job.title}</h3>
            <h4 className="text-gray-600">{job.company}</h4>
            <p className="text-gray-500">{job.duration}</p>
            <p className="text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
