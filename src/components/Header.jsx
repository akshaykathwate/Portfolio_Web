import { useEffect, useState } from "react";
import Resume from "./Resume";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  let [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <>
      <div className="bg-gray-100 dark:text-slate-200 dark:bg-slate-800  md:rounded mr-3 ml-3 mb-3 p-3 rounded-lg">
        <div className="h-14 flex items-center justify-between px-4 md:px-16">
          <div className="text-xl md:text-2xl font-bold font-serif hover:text-orange-500 text-purple-500">
            Portfolio
          </div>

          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={() => {
                setDarkmode(!darkmode);
              }}
              className={`${
                darkmode ? "bg-white text-slate-600" : "bg-slate-800 text-white"
              }  rounded-full p-2 md:text-2xl `}
            >
              {darkmode ? <MdDarkMode /> : <MdOutlineDarkMode />}
            </button>

            <div className="md:block ">
              <div className=" md:block">
                <Resume />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
