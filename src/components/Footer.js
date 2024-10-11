import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-4 mt-8 rounded-lg shadow-lg">
      <p className="text-center">Portfolio contributed by [Your Name]</p>
      <p className="text-center mt-2">
        <a href="https://github.com/[your-github-username]" className="hover:underline" target="_blank" rel="noopener noreferrer">
          Visit My GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
