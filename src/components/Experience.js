import React from 'react';
import { Chrono } from "react-chrono";

const ExperienceComponent = () => {
  const jobDescription = {
    "grader" : "Evaluated submissions in courses with more than 35 students each: Mobile Application Programming, " 
    + "and Fundamentals of Programming Language Concepts. "
    + "Provided explanation of course content and grading decision to students."
    + "Helped instructor construct grading session and assignment criteria."
  }

  const items = [{
    title: "2021",
    cardTitle: "Course Grader",
    cardSubtitle: "University of Washington Tacoma",
    cardDetailedText: jobDescription["grader"],
  }];

  return (
    <div style={{paddingTop: 80 }}>
      <div className="d-flex justify-content-center">
        <div className="animated-underline">
          <h2> Experience</h2>
        </div>
      </div>
      <div style={{ marginLeft: "4.5vw", width: "90vw" }}>
        <Chrono items={items} mode="VERTICAL" />
      </div>

    </div>
  );
}

export default ExperienceComponent;
