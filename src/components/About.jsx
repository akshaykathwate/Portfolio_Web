import { useState } from "react";
import bannerImage from "../assets/laptop.jpg";
import Underline from "./Underline";

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: "Java Developer",
    desc1: `I'm an Aspiring Software Developer ...`,
    desc2: `👉 I'm a 4th-year student pursuing Computer Science Engineering from @PJLCE Nagpur.`,
    desc3:
      "Passionate software developer focused on Java and web development, pursuing a B.Tech Final Year Student. Eager to enter the industry, gain hands-on experience, and explore new technologies to enhance skills. ",
    about: {
      name: "Akshay Kathwate ",
      skills:
        "Core Java | Servlet | JSP | JDBC | Spring MVC | Hibernate | Spring Boot | C++ | React | Javascript",
      email: "Akshaykathwate1421@gmail.com",
    },
  });

  return (
    <div className="bg-gray-100 dark:bg-slate-800 dark:text-slate-100 pb-6">
      <div className="p-6 md:p-10">
        <h1 className="text-center text-3xl md:text-4xl ">
          <Underline text="About Me" />
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              {data.title}
            </h1>
            <p className="text-sm md:text-base text-gray-700 dark:text-slate-200">
              {data.desc1}
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-slate-200">
              {data.desc2}
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-slate-200">
              {data.desc3}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left pb-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              <Underline text={data.about.name} />
            </h1>
            <p className="text-lg md:text-xl font-bold ">{data.about.skills}</p>
            <p className="text-sm md:text-base text-gray-700 dark:text-slate-200">
              Email: <Underline text={<a>{data.about.email}</a>} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
