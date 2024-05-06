import porject1 from "../../assets/Project/bistro.png";
import porject2 from "../../assets/Project/sport.png";
import porject3 from "../../assets/Project/furniro.png";
import porject4 from "../../assets/Project/canvix.png";
import porject5 from "../../assets/Project/tourist.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="py-4 md:py-[40px] px-4 md:px-[50px] bg-[#323946]">
      <div className="flex justify-between items-center mb-4 md:mb-0">
        <h2 className="text-xl md:text-5xl font-bold">
          My <span className="text-[#2563eb]">Portfolio</span>
        </h2>
        <Link
          target="black"
          to="https://github.com/mdmahedihassanshuvo"
          className="flex justify-center items-center gap-2 btn bg-[#e62872] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
            />
          </svg>
          <p className="text-xs md:text-base">Visit My Dribbble</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-10 md:mt-[100px]">
        {[
          {
            src: porject1,
            title: "Bistro Boss Restaurant",
            description: "E-commerce website",
            github: "https://github.com/mdmahedihassanshuvo/bistro-client",
            liveLink: "https://bistro-60b2f.web.app/",
          },
          {
            src: porject2,
            title: "Sports Mania",
            description: "School management website",
            github: "https://github.com/mdmahedihassanshuvo/SportsMania",
            liveLink: "https://sportsmania-f05ea.web.app/",
          },
          {
            src: porject3,
            title: "Furniro",
            description: "E-commerce website",
            github: "https://github.com/mdmahedihassanshuvo/furniro-client",
            liveLink: "https://fastidious-cuchufli-17d13f.netlify.app/",
          },
          {
            src: porject4,
            title: "Canvix",
            description: "Agency website",
            github: "https://github.com/mdmahedihassanshuvo/canvix",
            liveLink: "https://lively-rugelach-726e5c.netlify.app/",
          },
          {
            src: porject5,
            title: "Tourist",
            description: "Travel agency website",
            github: "https://github.com/mdmahedihassanshuvo/travel-client",
            liveLink: "https://gilded-maamoul-183923.netlify.app/",
          },
        ].map((project, index) => (
          <div key={index} className="bg-[#1f242d] rounded-lg">
            <div className="coverdiv text-white overflow-hidden">
              <div className="w-full h-52 overflow-hidden relative cursor-pointer">
                <img
                  className="portfolio-image w-full h-full object-cover"
                  src={project.src}
                  alt={project.title}
                />
              </div>
            </div>
            <div className="bg-[#323946] m-4 p-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-400 mt-2">
                {project.description}
              </p>
              <div className="flex justify-between mt-3 items-center">
                <Link
                  target="blank"
                  to={project.github}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium"
                >
                  Source code <FaGithub />
                </Link>
                <Link
                  target="blank"
                  to={project.liveLink}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-lg p-2 text-white text-base font-medium"
                >
                  Live Link <LuLink />
                </Link>
              </div>
              {project.title === "Canvix" && (
                <p className="mt-3 text-sm text-slate-400">
                  #Note: Currently working on this project
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
