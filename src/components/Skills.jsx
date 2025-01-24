import React from "react";
import { CgChevronDoubleRightO } from "react-icons/cg";

const Skills = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-3 px-5 rounded-lg  text-center font-medium text-sm transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white flex items-center justify-center"
        >
          <CgChevronDoubleRightO className="mr-2 text-lg text-blue-500 dark:text-blue-300" />
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
