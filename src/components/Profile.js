import React, { useState } from "react";

const Profile = ({ showResume, toggleResume }) => {
  const [loading, setLoading] = useState(false);

  const handleResumeClick = () => {
    toggleResume();
    if (!showResume) {
      setLoading(true);
    }
  };

  return (
    <section id="profile" className="bg-white shadow-lg rounded-lg p-6">
      {/* Profile Information */}
      <div className="mb-4">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczNnZc80Nlolqr_i2yCWgQFZexuiw_xzCvxoGu06B5ArpJQ-r-RgGoi0JkdVxSxgEGqFtR9DM-HGvBGxuI8o1aNbzM-6IvewUw4tiE6Nw6loMrro96EG25x8LJwBweiptvo1PARqrQGaZq4-BBlxs7Fn0Q=w451-h448-s-no-gm"
          alt="Your Name"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">Your Name</h2>
        <p className="text-gray-700">
          Web Developer specializing in the MERN stack. Passionate about building
          user-friendly, performant web applications. Always eager to learn new
          technologies and improve my skills.
        </p>
        <button
          onClick={handleResumeClick}
          className="block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300 mt-4"
        >
          {showResume ? "Hide Resume" : "View Resume"}
        </button>
      </div>

      {/* Loading message for the resume PDF */}
      {showResume && loading && <p className="text-center">Loading resume...</p>}
    </section>
  );
};

export default Profile;
