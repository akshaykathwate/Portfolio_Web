import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Button from "./Button";
import Underline from "./Underline";


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
      {/* The commented section is preserved as requested */}
      {/* <div className="bg-gray-100 dark:text-slate-200 dark:bg-slate-800 md:rounded mr-3 ml-3 mb-3 p-3 rounded-lg">
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
              } rounded-full p-2 md:text-2xl`}
            >
              {darkmode ? <MdDarkMode /> : <MdOutlineDarkMode />}
            </button>

            <div className="md:block">
              <Button
                className="md:block"
                text="Resume"
                link={`https://drive.google.com/file/d/1lynEw_D0cVoMP62E8M_pAY1YvC6gKd8G/view?usp=drive_link`}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* End of commented section */}

      <div className="navbar bg-slate-100 dark:bg-slate-800 flex lg:justify-around">
        <div className="flex-1">
          <a className="btn  text-xl"><Underline text="Portfolio"/></a>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <button
            onClick={() => {
              setDarkmode(!darkmode);
            }}
            className={`${
              darkmode ? "bg-white text-slate-600" : "bg-slate-800 text-white"
            } rounded-full p-2 md:text-2xl`}
          >
            {darkmode ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </button>
          <div className="flex-none">
            <div className="form-control">
              <Button
                text="Resume"
                link={`https://drive.google.com/file/d/1lynEw_D0cVoMP62E8M_pAY1YvC6gKd8G/view?usp=drive_link`}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
