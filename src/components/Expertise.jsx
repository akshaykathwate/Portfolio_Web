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
    "Problem Solving",
    "DSA",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          <Underline text="Skills" />
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          A showcase of my technical expertise and tools I'm proficient with.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Frontend Skills Section */}
        <div className="w-full lg:w-1/2 max-w-lg p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
            <Underline text="Frontend Developer" />
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <Skills skills={frontendSkills} />
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className="w-full lg:w-1/2 max-w-lg p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
            <Underline text="Backend Developer" />
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <Skills skills={backendSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
