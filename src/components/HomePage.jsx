import React from "react";
import useStore from "../store/store";
import Navbar from "./Navbar";

const HomePage = () => {
  const currentUser = useStore((state) => state.currentUser);
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <div
      className={`homepage mt-5 p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-4">
        Welcome to Springdale Public School
      </h1>
      <p className="text-center text-xl mb-6">
        Where we nurture young minds for a brighter future.
      </p>
      {currentUser && (
        <p className="text-center">Logged in as: {currentUser.name}</p>
      )}
      <button
        onClick={toggleTheme}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
      <div className="carousel mt-4">
        <div className="carousel-item">
          <img
            className="block w-full"
            src="https://via.placeholder.com/800x400"
            alt="Annual Sports Day"
          />
          <div className="carousel-caption bg-opacity-75 bg-black text-white p-2">
            <h3>Annual Sports Day - Celebrating Excellence in Sports</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="block w-full"
            src="https://via.placeholder.com/800x400"
            alt="Science Exhibition"
          />
          <div className="carousel-caption bg-opacity-75 bg-black text-white p-2">
            <h3>Science Exhibition - Showcasing Student Innovations</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="block w-full"
            src="https://via.placeholder.com/800x400"
            alt="Cultural Fest"
          />
          <div className="carousel-caption bg-opacity-75 bg-black text-white p-2">
            <h3>Cultural Fest - Embracing Diversity and Creativity</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
