import Skills from "./Skills";
import Underline from "./Underline";

const Expertise = () => {
  const frontendSkills = [
    "JavaScript",
    "Reactjs",
    "AngularJS",
    "Git & Github",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Core Java",
    "Spring Boot",
    "Microservices",
    "Spring MVC",
    "Hibernate",
    "MySQL",
    "Problem Solving ",
    "DSA",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          <Underline text="Skills" />
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          A showcase of my technical expertise and tools I'm proficient with.
        </p>
      </div>

      <div className="flex sm:flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-16 space-y-10 lg:space-y-0 gap-4">
        {/* Left Section */}
        {/* <div className="text-center lg:text-left space-y-6 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Technologies
          </h2>
          <p className="text-md lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I have a strong passion for programming and web development. Over
            the years, I've gained hands-on experience with various programming
            languages, frontend technologies, and backend frameworks. My skill
            set continues to grow with ongoing learning and projects.
          </p>
          <div>
            <Button
              text="Resume"
              link={`https://drive.google.com/file/d/1lynEw_D0cVoMP62E8M_pAY1YvC6gKd8G/view?usp=drive_link`}
            />
          </div>
        </div> */}

        {/* Right Section */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto border-2 border-transparent bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-500 hover:scale-105">
          {/* Frontend Skills Section */}
          <div className="w-full md:w-1/2 m-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
              <Underline text=" Frontend Developer" />
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md ">
              <Skills skills={frontendSkills} />
            </div>
          </div>

          {/* Backend Skills Section */}
          <div className="w-full md:w-1/2 m-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
              <Underline text=" Backend Developer" />
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <Skills skills={backendSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
