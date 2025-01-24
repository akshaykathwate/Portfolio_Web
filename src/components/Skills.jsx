import Button from "./Button";
import Underline from "./Underline";

const Expertise = () => {
  const skills = [
    "Core Java",
    "Spring MVC",
    "Springboot",
    "Hibernate",
    "Servlet",
    "JDBC",
    "JavaScript",
    "Tailwind",
    "React",
    "Material UI",
  ];

  const myskills = skills.join(" | ");

  return (
    <div className="bg-gray-100 dark:bg-slate-800 dark:text-slate-200 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
          <Underline text="Skills" />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 px-6 md:px-16">
        <div className="text-center space-y-5 md:w-2/3">
          <div className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Technologies
          </div>
          <p className="text-md md:text-lg text-gray-700 dark:text-slate-300">
            I have a great interest in programming and web development.
            <br /> I have learned various programming languages and frontend
            frameworks.
          </p>
          <Button
            text="Resume"
            link={`https://drive.google.com/file/d/1lynEw_D0cVoMP62E8M_pAY1YvC6gKd8G/view?usp=drive_link`}
          />
        </div>

        <div className="mt-8 md:mt-0">
          <div className="bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 p-6 md:p-10 rounded-xl shadow-md max-w-xs md:max-w-sm mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              My Skills
            </h2>
            <div className="text-center">
              <p className="text-md md:text-lg font-medium">{myskills}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
