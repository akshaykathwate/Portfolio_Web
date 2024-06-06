import { useState } from "react";
const Resume = () => {
      const [actionButton, setActionButton] = useState({
        id: 1,
        link: "https://drive.google.com/file/d/1S6jJr6-LOQGTNz5ozhYLPPktwH_07EAW/view",
        title: "Resume",
      });
  return (
    <div className="md:m-3 ">
      <a
        key={actionButton.id}
        href={actionButton.link}
        rel="noreferrer"
        target="_blank"
        className="
        text-center md:px-4 md:py-2 
        px-2 py-1
        rounded-lg text-xl font-serif 
        bg-blue-700 text-white 
        hover:bg-blue-500
        dark:text-slate-100 dark:bg-blue-500 dark:hover:bg-blue-700 
        "
      >
        {actionButton.title}
      </a>
    </div>
  );
}

export default Resume
