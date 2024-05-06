import person2 from "../../assets/Person/person2.png";

const About = () => {
  return (
    <div className="bg-[#323946] px-5 py-5 md:px-[50px] md:py-[100px]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <img
            className="w-full h-64 md:w-[70%] md:h-[457px] rounded-2xl"
            src={person2}
            alt="Person"
          />
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold mb-3">
            <span className="text-blue-600">About</span> Me
          </h3>
          <hr className="border-2 border-gray-300 mb-3" />
          <div className="space-y-3">
            <p className="text-2xl font-bold">
              Hi I am, <br />
              Md. Mahedi Hassan Shuvo
            </p>
            <p className="text-xl font-medium">
              FRONTEND WEB DEVELOPER IN DHAKA, BANGLADESH
            </p>
            <p className="text-lg font-normal text-justify">
              As a web developer, my goal is to create engaging and intuitive
              web applications that enhance user experience. I’m eager to expand
              my skills and explore new technologies to bring innovative ideas
              to life. My focus is on clean code, attention to detail, and
              passion for problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
