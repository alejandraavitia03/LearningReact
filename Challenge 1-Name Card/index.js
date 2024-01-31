import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="C++" color="pink" emoji="👨‍💻" />
      <Skill name="Python" color="green" emoji="🐍" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
function Avatar() {
  return (
    <div className="avatar">
      <img src="/me.JPG" alt="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Pita</h1>
      <p>
        Back end developer and currently learning front end. I am passionate
        about teaching young ones to code. When I am not learning I am playing
        video games and enjoy to cook and eat out. Nika is my bestie.{" "}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
