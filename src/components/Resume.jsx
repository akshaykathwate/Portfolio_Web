import { useState } from "react";
const Resume = () => {
  const [actionButton] = useState({
    id: 1,
    link: "https://drive.google.com/file/d/16lMstuqF3PPLAVHh2AeKGCMdbCx8fG1E/view?usp=drive_link",
    title: "Resume",
  });
  return (
    <div className=" ">
      <a
        key={actionButton.id}
        href={actionButton.link}
        rel="noreferrer"
        target="_blank"
        className="
        flex justify-center text-center md:p-3 
        p-2
        rounded-lg  font-serif 
        bg-blue-700 text-white 
        hover:bg-blue-500
        dark:text-slate-100
        "
      >
        {actionButton.title}
      </a>
    </div>
  );
};

export default Resume;
