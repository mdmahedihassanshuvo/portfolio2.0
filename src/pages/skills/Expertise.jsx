import skill1 from "../../assets/skills/skill1.png";
import skill2 from "../../assets/skills/skill2.png";
import skill3 from "../../assets/skills/skill3.png";
import skill4 from "../../assets/skills/skill4.svg";
import skill5 from "../../assets/skills/skill5.png";
import skill6 from "../../assets/skills/skill6.png";
import skill7 from "../../assets/skills/skill7.png";
import skill8 from "../../assets/skills/skill8.png";
import skill9 from "../../assets/skills/skill9.png";
import skill10 from "../../assets/skills/skill10.png";
import skill11 from "../../assets/skills/skill11.png";
import "./Expertise.css";
import { useState } from "react";

const Expertise = () => {
  const [active, setActive] = useState(true);
  const [enable, setEnable] = useState(false);

  const handleActive = () => {
    setActive(false);
    setEnable(true);
    const button = document.getElementById("seeAll");
    button.style.display = "none";
  };

  return (
    <div className="mx-auto px-4 py-8 md:px-[50px] md:py-[100px] bg-[#1f242d] relative">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="text-blue-600">Skills</span>
      </h3>
      <hr className="border-2 mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:mt-8">
        {[
          { img: skill1, title: "HTML 5" },
          { img: skill2, title: "CSS 3" },
          { img: skill3, title: "Bootstrap" },
          { img: skill4, title: "Tailwind" },
          { img: skill5, title: "JavaScript" },
          { img: skill6, title: "Jquery" },
          { img: skill7, title: "React.js" },
          { img: skill8, title: "MongoDB" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl border card shadow-lg"
          >
            <img className="w-24 h-24" src={skill.img} alt={skill.title} />
            <h4 className="text-xl font-semibold mt-2">{skill.title}</h4>
          </div>
        ))}
        {!active && (
          <>
            <div className="flex flex-col items-center p-4 rounded-xl border card shadow-lg">
              <img className="w-24 h-24" src={skill9} alt="Node.js" />
              <h4 className="text-xl font-semibold mt-2">Node.js</h4>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl border card shadow-lg">
              <img className="w-24 h-24" src={skill10} alt="Express.js" />
              <h4 className="text-xl font-semibold mt-2">Express.js</h4>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl border card shadow-lg">
              <img className="w-24 h-24" src={skill11} alt="Firebase" />
              <h4 className="text-xl font-semibold mt-2">Firebase</h4>
            </div>
          </>
        )}
      </div>
      {active && (
        <div className="text-center mt-4">
          <button
            disabled={enable}
            onClick={handleActive}
            className="bg-blue-600 text-white px-4 py-2 rounded"
            id="seeAll"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Expertise;
