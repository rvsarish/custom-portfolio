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
    <section id="profile" className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczNnZc80Nlolqr_i2yCWgQFZexuiw_xzCvxoGu06B5ArpJQ-r-RgGoi0JkdVxSxgEGqFtR9DM-HGvBGxuI8o1aNbzM-6IvewUw4tiE6Nw6loMrro96EG25x8LJwBweiptvo1PARqrQGaZq4-BBlxs7Fn0Q=w451-h448-s-no-gm"
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-600"
        />
        <h2 className="text-3xl font-semibold text-indigo-700">Your Name</h2>
        <p className="text-gray-600 mt-3">
          Web Developer specializing in the MERN stack. Passionate about building
          user-friendly, performant web applications. Always eager to learn new
          technologies and improve my skills.
        </p>
        <button
          onClick={handleResumeClick}
          className="mt-6 bg-indigo-600 text-white px-8 py-2 rounded shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          {showResume ? "Hide Resume" : "View Resume"}
        </button>
      </div>

      {showResume && loading && <p className="text-center text-gray-500 mt-4">Loading resume...</p>}
    </section>
  );
};

export default Profile;
