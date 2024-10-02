import { useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerImage from "../assets/ProfileImg2.jpg";
import BannerBackground from "../assets/banner_wallpaper.svg";

const Description = (
  <div>
    To start a career in a challenging and growth-oriented organization to
    effectively <br />
    use skills and excel as a professional to achieve greater <br />
    heights and recognition in career.
  </div>
);

const Profile = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Frontend Developer", "Coder"],
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
      link: "https://www.linkedin.com/in/akshay-kathwate-0a0775229/",
    },
    {
      iconClass: "fa-brands fa-github",
      link: "https://github.com/akshaykathwate",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: "cover",
        transition: "all 0.3s ease-in-out",
      }}
      className="main-container flex items-center justify-between dark:bg-slate-900 dark:text-slate-100 rounded-md p-6 md:p-10 shadow-lg"
    >
      <div className="w-full text-white text-center md:text-left space-y-4">
        <h3 className="text-xl font-semibold animate-fade-in-up dark:text-black">
          Hi, I am
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold transition-all hover:tracking-wide duration-300 text-slate-900">
          Akshay Kathwate
        </h2>
        <h3 className="text-lg  ">
          I Am
          <span
            className="ml-2 text-2xl font-bold text-orange-200 animate-pulse rounded-lg pt-1 p-2 "
            ref={el}
          ></span>
        </h3>
        <p className="text-md md:text-lg mt-2  dark:text-black text-md ">
          {Description}
        </p>
        <div className="icons-container flex space-x-6 items-center justify-center md:justify-start mt-6">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 transform duration-300 hover:bg-orange-400 md:h-14 md:w-14 h-12 w-12 rounded-full bg-slate-900 flex justify-center items-center shadow-lg"
            >
              <i className={`fa ${icon.iconClass} text-3xl`}></i>
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
