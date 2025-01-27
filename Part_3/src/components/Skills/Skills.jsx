import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-main">
            <div className="skill">
              <h3>HTML5</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
                <p>90%</p>
              </div>
            </div>
            <div className="skill">
              <h3>CSS</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
                <p>85%</p>
              </div>
            </div>
            <div className="skill">
              <h3>Javascript</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
                <p>75%</p>
              </div>
            </div>
            <div className="skill">
              <h3>React</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
                <p>75%</p>
              </div>
            </div>
            <div className="skill">
              <h3>MySQL</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "77%" }}></div>
                </div>
                <p>77%</p>
              </div>
            </div>
            <div className="skill">
              <h3>UI/UX Design</h3>
              <div className="progress-main">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "82%" }}></div>
                </div>
                <p>82%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
