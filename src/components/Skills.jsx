import Button from "./Button";
import Underline from "./Underline";

const Expertise = () => {
  const skills = [
    "Core Java",
    "Spring MVC",
    "Spring Boot",
    "Hibernate",
    "Servlet",
    "JDBC",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Material UI",
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

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-16 space-y-10 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center lg:text-left space-y-6 lg:w-2/3">
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
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white p-8 rounded-xl shadow-lg lg:w-1/3 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-semibold mb-6 text-center">My Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-2 px-4 rounded-md shadow-md text-center font-medium text-sm transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
