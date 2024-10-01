import { useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerImage from "../assets/ProfileImg2.jpg";
import BannerBackground from "../assets/banner_wallpaper.svg";


const Description = <div>To start a career in a challenging and growth-oriented organization to
          effectively <br></br>use skills and excel as a professional to achieve
          greater <br />
          heights and recognition in career.</div>

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Coder"],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 60,
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
      }}
      className="main-container flex flex-col md:flex-row items-center dark:bg-slate-900 dark:text-slate-100 "
    >
      <div className="w-full  p-6 text-white text-center space-y-2 md:text-left md:w-2/3 md:p-10 md:space-y-3 ">
        <h3 className="text-xl font-semibold">Hi, I am</h3>
        <h1 className="text-3xl md:text-4xl font-bold">Akshay Kathwate</h1>
        <h3 className="text-lg">
          I Am
          <span
            className="m-2 text-2xl font-bold text-blue-300 underline"
            ref={el}
          ></span>
        </h3>
        <p className="text-md md:text-base justify-between md:text-start">
          {Description}
        </p>
        <div className="icons-container space-x-6 flex  items-center justify-center mt-4 md:justify-start ">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer hover:bg-orange-400 md:h-14 md:w-14 h-12 w-12 rounded-full bg-slate-900 flex 
              justify-center items-center`}
            >
              <i className={`fa ${icon.iconClass} text-3xl`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 hidden md:block">
        <img
          src={BannerImage}
          alt="Profile"
          className="rounded-full w-1/2 md:w-3/4 shadow-md
           dark:bg-slate-900 dark:text-slate-100 mt-5
           mb-5 shadow-sky-600 hover:shadow-orange-600"
        />
      </div>
    </div>
  );
};

export default Banner;
