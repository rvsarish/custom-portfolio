import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <nav className="space-x-6">
          {["Profile", "Projects", "Experience", "Contact", "Links"].map((section) => (
            <a href={`#${section.toLowerCase()}`} key={section} className="hover:text-indigo-200 transition-colors duration-200">
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
