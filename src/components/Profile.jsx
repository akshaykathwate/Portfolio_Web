import { useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerImage from "../assets/ProfileImg2.jpg";

// Profile Component
const Profile = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Java Developer", "Frontend Developer", "Coder"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const socialIcons = [
    {
      iconClass: "fa-solid fa-code",
      link: "https://www.codingninjas.com/studio/profile/AkshayKathwate",
    },
    {
      iconClass: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/akshaykathwate",
    },
    {
      iconClass: "fa-brands fa-github",
      link: "https://github.com/akshaykathwate",
    },
  ];

  return (
    <div className="main-container flex items-center justify-center md:justify-between dark:bg-gray-800 dark:text-white bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
      <div className="w-full text-center md:text-left space-y-4">
        <h3 className="text-xl font-semibold animate-fade-in-up">Hi, I am</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-all hover:tracking-wide duration-300">
          Akshay Kathwate
        </h2>
        <h3 className="text-lg">
          I Am{" "}
          <span
            className="ml-2 text-2xl font-bold text-orange-500 animate-pulse rounded-lg pt-1 p-2 "
            ref={el}
          ></span>
        </h3>
        <p className="text-md md:text-lg mt-2 md:w-2/3 dark:text-gray-300 text-gray-700">
          I'm a final-year Computer Science and Engineering student skilled in
          Java, Spring Boot, React, and DSA. Passionate about learning and
          problem-solving, I aim to contribute to innovative projects while
          growing my technical skills.
        </p>
        <div className="icons-container flex space-x-6 items-center justify-center md:justify-start mt-6">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 transform duration-300 hover:bg-orange-400 md:h-14 md:w-14 h-12 w-12 rounded-full bg-gray-900 dark:bg-gray-700 flex justify-center items-center shadow-lg"
            >
              <i className={`fa ${icon.iconClass} text-3xl text-white`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2 justify-center">
        <img
          src={BannerImage}
          alt="Profile"
          className="rounded-full w-1/2 md:w-3/4 shadow-md dark:bg-slate-900 dark:text-slate-100 mt-5 mb-5 shadow-sky-600 hover:shadow-orange-600 transform transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Profile;
