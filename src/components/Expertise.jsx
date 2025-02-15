import React from "react";
import { motion } from "framer-motion";
import { CgChevronDoubleRightO } from "react-icons/cg";
import Underline from "./Underline";

const Expertise = () => {
  const frontendSkills = [
    "JavaScript",
    "React.js",
    "AngularJS",
    "Git & GitHub",
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
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-gray-900 dark:to-gray-800 py-16 px-6 sm:px-10 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white">
          <Underline text="Skills & Expertise" />
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          Showcasing my technical proficiency and the tools I excel at.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
            <Underline text="Frontend Development" />
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-3 px-4 rounded-xl flex items-center justify-center shadow-md"
              >
                <CgChevronDoubleRightO className="mr-2 text-lg text-blue-500 dark:text-blue-300" />
                <span className="font-medium text-base">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
            <Underline text="Backend Development" />
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-3 px-4 rounded-xl flex items-center justify-center shadow-md"
              >
                <CgChevronDoubleRightO className="mr-2 text-lg text-blue-500 dark:text-blue-300" />
                <span className="font-medium text-base">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
