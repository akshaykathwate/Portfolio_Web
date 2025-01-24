import Underline from "./Underline";
import { MdCastForEducation } from "react-icons/md";
import { GiJourney } from "react-icons/gi";



const Timeline = () => {
  return (
    <div className="flex flex-col lg:justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-6 ">
      <h2 className="text-center text-3xl font-bold mb-8">
        <Underline text="Qualification" />
      </h2>
      <h1 className="text-center text-xl font-bold mb-8">
        <div className="flex justify-center items-center gap-3">
          <GiJourney />
          <Underline text="My Personal Journey" />
        </div>
      </h1>

      <div className="flex flex-col">
        <div className="text-xl font-semibold text-slate-600 dark:text-slate-50 p-2">
          <div className="flex justify-start items-center gap-2">
            {" "}
            <MdCastForEducation />
            <Underline text="Education :" />
          </div>
        </div>
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start font-bold text-lg">2019</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-blue-500 dark:text-blue-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box shadow-lg p-4 bg-white dark:bg-gray-800 rounded-lg">
              Completed SSC with 80.40% aggregate
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
          </li>
          <li>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
            <div className="timeline-start font-bold text-lg">2021</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-blue-500 dark:text-blue-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box shadow-lg p-4 bg-white dark:bg-gray-800 rounded-lg">
              Completed HSC with 92% aggregate
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
          </li>
          <li>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
            <div className="timeline-start font-bold text-lg">2025</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-blue-500 dark:text-blue-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box shadow-lg p-4 bg-white dark:bg-gray-800 rounded-lg">
              Pursuing B.Tech (8th Semester) with a current aggregate of 74.86%
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
