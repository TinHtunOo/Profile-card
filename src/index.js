import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profiles = [
  {
    name: "Alex Tan",
    description:
      "Alex is an aspiring chef who loves experimenting with new recipes and culinary techniques. Passionate about blending different flavors and ingredients, Alex enjoys bringing creativity to every dish.",
    imageName: "/images/AlexTan.avif",
    skills: [
      { skill: "Culinary Innovation", color: "#FF5733", level: "Advanced" },
      { skill: "Recipe Development", color: "#33FF57", level: "Advanced" },
      { skill: "Food Presentation", color: "#3357FF", level: "Intermediate" },
      { skill: "Flavor Pairing", color: "#F3FF33", level: "Advanced" },
    ],
  },
  {
    name: "Maya Singh",
    description:
      "Maya is a language enthusiast with a knack for learning and teaching new languages. Her passion for words and grammar makes her an excellent communicator and writer, always striving for linguistic perfection.",
    imageName: "/images/MayaSingh.avif",
    skills: [
      {
        skill: "Multilingual Proficiency",
        color: "#FF33A6",
        level: "Advanced",
      },
      {
        skill: "Grammar and Syntax Expertise",
        color: "#33FFF5",
        level: "Advanced",
      },
      { skill: "Creative Writing", color: "#FF9333", level: "Intermediate" },
      { skill: "Language Teaching", color: "#6B33FF", level: "Advanced" },
    ],
  },
  {
    name: "Jason Lee",
    description:
      "Jason is a tech-savvy individual with a deep interest in web development and coding. He loves exploring new programming languages and frameworks, constantly seeking to improve his technical skills and create innovative solutions.",
    imageName: "/images/JasonLee.avif",
    skills: [
      { skill: "Web Development", color: "#33FF6F", level: "Advanced" },
      { skill: "JavaScript and React", color: "#FF33C1", level: "Advanced" },
      { skill: "Problem Solving", color: "#33B5FF", level: "Intermediate" },
      { skill: "Software Design", color: "#FFA633", level: "Advanced" },
    ],
  },
  {
    name: "Chloe Nguyen",
    description:
      "Chloe is a digital artist who specializes in creating stunning visual content. With a keen eye for detail and a passion for creativity, she transforms ideas into captivating visual experiences.",
    imageName: "/images/ChloeNguyen.avif",
    skills: [
      { skill: "Digital Illustration", color: "#FF336D", level: "Advanced" },
      { skill: "Graphic Design", color: "#33FFB8", level: "Advanced" },
      { skill: "Animation", color: "#FFBD33", level: "Intermediate" },
      { skill: "3D Modeling", color: "#8C33FF", level: "Beginner" },
    ],
  },
];

function App() {
  return (
    <div className="container">
      {profiles.map((profile) => (
        <Card
          name={profile.name}
          imageName={profile.imageName}
          description={profile.description}
          skills={profile.skills}
          key={profile.name}
        />
      ))}
    </div>
  );
}

function Card({ name, imageName, description, skills }) {
  return (
    <div className="card">
      <img src={imageName} alt={name} />
      <MyInfo name={name} description={description} />
      <MySkill skills={skills} />
    </div>
  );
}

function MyInfo({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function MySkill({ skills }) {
  return (
    <div className="skill-box">
      {skills.map((data) => (
        <ASkill skill={data.skill} color={data.color} level={data.level} />
      ))}
    </div>
  );
}

function ASkill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: `${color}` }}>
      <span>{skill}</span>
      <span>
        {/* {level === "advance" ? (
          <i class="fa-solid fa-hand-fist"></i>
        ) : level === "intermediate" ? (
          <i class="fa-solid fa-thumbs-up"></i>
        ) : (
          <i class="fa-solid fa-baby"></i>
        )} */}
        {level === "Advanced" && <i className="fa-solid fa-hand-fist"></i>}
        {level === "Intermediate" && <i className="fa-solid fa-thumbs-up"></i>}
        {level === "Beginner" && <i className="fa-solid fa-baby"></i>}
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
