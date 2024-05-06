import { Link } from "react-router-dom";
import person from "../../assets/Person/person2.png";
import "./Home.css";

const Home = () => {
  const resume = "See Resume >";
  return (
    <div className="banner md:px-[80px] p-[20px] w-full flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="text-white md:w-1/2 md:ps-3 md:space-y-4 space-y-2 text-center md:text-start">
        <h4 className="md:text-xl text-sm font-medium">
          MD. MAHEDI HASSAN SHUVO
        </h4>
        <h2 className="md:text-5xl text-xl font-bold">
          I’m a Frontend Web Developer
        </h2>
        {/* <p className="md:text-base font-medium text-xs">
          As a web developer, my goal is to create engaging and intuitive web applications that enhance user experience. I’m eager to expand my skills and explore new technologies to bring innovative ideas to life. My focus is on clean code, attention to detail, and passion for problem-solving.
        </p> */}
            {/* <Link
            target="blank"
            to="https://drive.google.com/file/d/1Ub7SSYDTSkDlzUlcvP9DCB-ZqOFgDloW/view?usp=sharing"
            className="btn btn-outline text-white hover:bg-blue-600  rounded-full md:text-lg text-sm"
            >
            {resume}
            </Link> */}
      </div>
      <div className="md:w-1/2 flex justify-center items-center md:mb-0 mb-4">
        <img className="rounded-full md:h-96 h-40" src={person} alt="" />
      </div>
    </div>
  );
};

export default Home;
