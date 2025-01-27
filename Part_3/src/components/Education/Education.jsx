import React from "react";

import "./Education.css";

const Education = () => {
  const education = [
    {
      id: 1,
      duration: "2024 - 2026",
      degree: "Post Graduate in Computer Software",
      school: "Loyalist College in Toronto",
      location: "Ontario, Canada",
      description:
        "Currently enrolled in a post-graduate program focused on Computer software and Database Development program in Toronto. I am learning about software development, web technologies, and database management.",
    },
    {
      id: 2,
      duration: "2018 - 2022",
      degree: "Bachelor of Information Technology",
      school: "London Metropolitan University",
      location: "Kathmandu, Nepal",
      description:
        "Focused on software development, web technologies, and database management. Completed various projects involving front-end and back-end technologies.",
    },
    {
      id: 3,
      duration: "2016 - 2018",
      degree: "High School Diploma in Science",
      school: "Trinity International College",
      location: "Kathmandu, Nepal",
      description:
        "Completed courses in mathematics, computer science, and general studies. Participated in various extracurricular activities related to technology and design.",
    },
  ];

  return (
    <>
      <div className="education">
        <h2>Education</h2>
        <div className="education-container">
          {education.map((edu) => {
            return (
              <div key={edu.id} className="education-item">
                <p className="duration">{edu.duration}</p>
                <p className="degree">{edu.degree}</p>
                <hr />
                <p className="school-name">{edu.school}</p>
                <p className="location">{edu.location}</p>
                <p className="description">{edu.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
