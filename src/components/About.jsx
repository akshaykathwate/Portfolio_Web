import { useState } from "react";
import bannerImage from "../assets/laptop.jpg";
import Underline from "./Underline";

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: "Aspiring Java Developer",
    desc1: `I am an aspiring software developer with a strong foundation in Java and a passion for building efficient, user-friendly applications.`,
    desc2: `🎓 Currently, I am pursuing a Bachelor's degree in Computer Science Engineering at Priyadarshini J.L. College of Engineering, Nagpur.`,
    desc3: `I am a detail-oriented and highly motivated individual eager to explore innovative technologies, gain hands-on industry experience, and continuously enhance my skills. My focus lies in delivering impactful solutions that bridge creativity and functionality.`,
    about: {
      name: "Akshay Kathwate",
      skills:
        "Core Java | Servlet | JSP | JDBC | Spring MVC | Hibernate | Spring Boot | C++ | React | JavaScript",
      email: "Akshaykathwate1421@gmail.com",
    },
  });

  return (
    <div className="bg-gray-100 dark:bg-slate-800 dark:text-slate-100 py-12 px-6">
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          <Underline text="About Me" />
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            {data.desc1}
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            {data.desc2}
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            {data.desc3}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            <Underline text={data.about.name} />
          </h1>
          <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-300 text-center md:text-left">
            {data.about.skills}
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${data.about.email}`}
              className="text-blue-500 dark:text-blue-300 hover:underline"
            >
              {data.about.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
