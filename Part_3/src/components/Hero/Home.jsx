import React from "react";
import image from "../Assets/images/bg.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={image} alt="home" />

        <div className="home-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Discover my projects, skills, and passion for creating innovative
            solutions. Let's build something great together!
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
