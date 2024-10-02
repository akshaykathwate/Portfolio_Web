import { useState } from "react";
import bannerImage from "../assets/laptop.jpg";

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: "Frontend Developer",
    desc1: `I'm a Aspiring Software Developer ...`,
    desc2: `👉 I'm a 4th year student pursuing Computer Science Engineering from @PJLCE Nagpur.`,
    desc3:
      "Passionate software developer focused on Java and web development, pursuing a B.Tech Final Year Student. Eager to enter the industry, gain hands-on experience, and explore new technologies to enhance skills. ",
    about: {
      name: "Akshay Kathwate ",
      skills:
        "Core Java| Servlet | JSP | JDBC |Spring MVC | Hibernate | Springboot | C++ | React |Javascript",
      email: "Akshaykathwate1421@gmail.com",
      phone: "9172387421",
    },
  });

  return (
    <div className="bg-gray-100  dark:bg-slate-800 dark:text-slate-100 pb-3">
      <div className="p-2 md:p-6">
        <h1 className="text-center text-2xl md:text-3xl underline font-bold">
          About Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">{data.title}</h1>
            <p className="text-sm md:text-base">{data.desc1}</p>
            <p className="text-sm md:text-base text-black dark:text-slate-100">
              {data.desc2}
            </p>
            <p className="text-sm md:text-base">{data.desc3}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left pb-3">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {data.about.name}
            </h1>
            <p className="text-xl md:text-base font-bold">
              {data.about.skills}
            </p>
            <p className="text-sm md:text-base">Email : {data.about.email}</p>
            <p className="text-sm md:text-base">Phone : {data.about.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
