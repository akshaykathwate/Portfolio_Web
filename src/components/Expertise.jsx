import BannerBackground from "../assets/banner_wallpaper.svg";
import Resume from "./Resume";

const Expertise = () => {
  const skills = [
    "Core Java",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Material UI",
  ];

  const myskills = skills.join(", ");

  return (
    <div className="dark:bg-slate-900 dark:text-slate-200">
      <h1 className="text-2xl md:text-3xl font-bold underline text-center">
        My Expertise
      </h1>
      <div
        style={{
          backgroundImage: `url(${BannerBackground})`,
          backgroundSize: "cover",
        }}
        className="flex flex-col md:flex-row py-10 md:py-14 my-4"
      >
        <div className="md:w-2/3 mx-auto md:mx-0">
          <div className="text-center space-y-3">
            <div className="text-xl md:text-2xl sm:text-black font-bold">
              Technologies
            </div>
            <p className="text-black font-serif">
              I have a great interest in Programming & web Development.
              <br /> I have learned various programming languages and frontend
              frameworks.
            </p>
            <button>
              <Resume />
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-5 md:mt-0  ">
          <div className="text-xs md:text-sm mt-2 px-2 py-1 rounded-lg hover:text-white cursor-pointer font-bold font-serif text-center flex justify-center items-center m-7 p-3">
            <div
              className="dark:text-slate-200 dark:bg-slate-900 
             rounded-2xl ring-2 ring-purple-500 ring-inset

              "
            >
              <h1 className="text-xl m-2">My Skills</h1>
              <div className="m-2 p-6 md:p-10 font-serif text-md">{myskills}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
