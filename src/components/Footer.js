import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mt-12 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Portfolio contributed by <span className="underline">[Your Name]</span>
        </p>
        <p className="mt-3">
          <a 
            href="https://github.com/[your-github-username]" 
            className="text-white font-bold hover:text-yellow-300 transition duration-300 ease-in-out" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
        </p>
        <div className="mt-4">
          <p className="text-sm opacity-75">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
