import React from "react";
import profile from "../Assets/images/profile.jpeg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={profile} alt="about" />
          </div>
          <div className="about-text">
            <p style={{ fontWeight: "bold" }}>
              Hi, I'm Kristina! I specialize in front-end development using
              HTML, CSS, JavaScript, and React. Let’s connect and build
              something extraordinary together!
            </p>
            <p>
              I’m passionate about creating innovative web designs and
              developing seamless user experiences. With expertise in web
              development and design, I aim to deliver user-friendly solutions
              that make a difference. With expertise in web development and
              design, I aim to deliver user-friendly solutions that make a
              difference.
            </p>
            <hr />
            <div className="grid-container">
              <div className="grid-item">
                <h3>Phone</h3>
                <p>+1 437 7775068</p>
              </div>
              <div className="grid-item">
                <h3>Email</h3>
                <p>kristinashrestha2055.gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
