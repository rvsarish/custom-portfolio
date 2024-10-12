import React from "react";

const Links = () => {
  const links = [
    { href: "https://github.com/[your-github-username]", label: "GitHub", icon: "🐙" },
    { href: "https://linkedin.com/in/[your-linkedin-username]", label: "LinkedIn", icon: "💼" },
    { href: "https://twitter.com/[your-twitter-handle]", label: "Twitter", icon: "🐦" },
    { href: "https://your-portfolio-url.com", label: "Personal Portfolio", icon: "📄" },
  ];

  return (
    <section id="links" className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Important Links</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-2xl">{link.icon}</span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline text-lg"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Links;
