import { useState } from "react";
import bannerImage from "../assets/laptop.jpg";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Frontend Developer",
    desc1: `I'm a Aspiring Software Developer ...`,
    desc2: `👉 I'm a 3rd student pursuing Computer Science Engineering from @PJLCE Nagpur.`,
    desc3: "I have great interest in web Development created a Shopping cart Website. ",
    actionButton: {
      title: "Read More",
      link: "/readmore",
    },
    about: {
      name: "Akshay Kathwate ",
      skills: "Core Java | C| C++ | React |Javascript  ",
      email: "Akshaykathwate14@gmail.com",
      phone: "9172387421",
    },
  });
    const [actionButton, setActionButton] = useState({
      id: 1,
      link: "https://drive.google.com/file/d/1S6jJr6-LOQGTNz5ozhYLPPktwH_07EAW/view",
      title: "Resume",
    });

  return (
    <div className="bg-gray-100  dark:bg-slate-800 dark:text-slate-100">
      <div className="p-6 md:p-12">
        <h1 className="text-center text-2xl md:text-3xl underline font-bold">
          About Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">{data.title}</h1>
            <p className="text-sm md:text-base">{data.desc1}</p>
            <p className="text-sm md:text-base text-black dark:text-slate-100">{data.desc2}</p>
            <p className="text-sm md:text-base">{data.desc3}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="space-y-5 w-11/12 md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {data.about.name}
            </h1>
            <p className="text-xl md:text-base font-bold">
              {data.about.skills}
            </p>
            <p className="text-sm md:text-base">Email : {data.about.email}</p>
            <p className="text-sm md:text-base">Phone : {data.about.phone}</p>

            <div className="m-5 pb-6">
              <a
                key={actionButton.id}
                href={actionButton.link}
                rel="noreferrer"
                target="_blank"
                className="text-xl px-4 py-2 font-serif  bg-purple-500 rounded-3xl text-black hover:text-white hover:bg-black "
              >
                {actionButton.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
