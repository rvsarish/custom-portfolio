import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">Contact</h2>
      <p className="text-gray-700 text-center mb-4">
        Feel free to reach out for collaborations or just to say hi!
      </p>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded" required />
        <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded" required />
        <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded" rows="4" required></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
