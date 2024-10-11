import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#profile" className="hover:text-indigo-200 transition">Profile</a>
          <a href="#projects" className="hover:text-indigo-200 transition">Projects</a>
          <a href="#experience" className="hover:text-indigo-200 transition">Experience</a>
          <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
          <a href="#links" className="hover:text-indigo-200 transition">Links</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
