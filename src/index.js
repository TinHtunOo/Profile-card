import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dataArray = [
  { skill: "Culinary Enthusiast", color: "7B151F", level: "beginner" },
  { skill: "Language Aficionado", color: "805F15", level: "advance" },
  { skill: "JavaScript Learner", color: "172557", level: "intermediate" },
  {
    skill: "Self-Improvement Advocate",
    color: "216A12",
    level: "intermediate",
  },
];

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        alt="Profile"
      />
      <MyInfo />
      <MySkill />
    </div>
  );
}

function MyInfo() {
  return (
    <div>
      <h1>Tin Htun Oo</h1>
      <p>
        I'm passionate about learning and self-improvement. I enjoy cooking,
        especially perfecting recipes like a half-fried egg. I have a strong
        curiosity about programming, exploring JavaScript concepts like forEach,
        and map. My journey is one of continuous growth and development
      </p>
    </div>
  );
}

function MySkill() {
  return (
    <div className="skill-box">
      {dataArray.map((data) => (
        <ASkill skill={data.skill} skillColor={data.color} level={data.level} />
      ))}
    </div>
  );
}

function ASkill({ skill, skillColor, level }) {
  return (
    <div className="skill" style={{ backgroundColor: `#${skillColor}` }}>
      <span>{skill}</span>
      <span>
        {/* {level === "advance" ? (
          <i class="fa-solid fa-hand-fist"></i>
        ) : level === "intermediate" ? (
          <i class="fa-solid fa-thumbs-up"></i>
        ) : (
          <i class="fa-solid fa-baby"></i>
        )} */}
        {level === "advance" && <i class="fa-solid fa-hand-fist"></i>}
        {level === "intermediate" && <i class="fa-solid fa-thumbs-up"></i>}
        {level === "beginner" && <i class="fa-solid fa-baby"></i>}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
