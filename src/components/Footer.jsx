import Underline from "./Underline";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Section 1 */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Kathwate Akshay</h1>
            <p className="text-sm mt-2 ">
              <div className=" uppercase">
                {" "}
                <Underline text="Web Developer | Java Full Stack Developer | Tech Enthusiast" />
              </div>
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="www.linkedin.com/in/akshaykathwate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Underline
                text="Linkedin"
                link={`"www.linkedin.com/in/akshaykathwate`}
              />
            </a>
            <a
              href="https://github.com/akshaykathwate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Underline
                text="Github"
                link={`https://github.com/akshaykathwate`}
              />
            </a>
            <a
              href="https://leetcode.com/u/akshaykathwate/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Underline
                text="LeetCode"
                link={`https://leetcode.com/u/akshaykathwate/`}
              />
            </a>
          </div>
        </div>
        {/* Section 3 */}
        <div className="mt-8 text-center py-2">
          <div className="flex justify-center items-center  gap-2">
            {" "}
            <CgMail />
            <h2>akshaykathwate1421@gmail.com</h2>
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2025 Kathwate Akshay. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
