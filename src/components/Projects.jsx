import { useState } from "react";
import Button from "./Button";
import Underline from "./Underline";

const Projects = () => {
  const [services] = useState([
    {
      title: "Video Streaming Application",
      description: `Developed a scalable video streaming application leveraging Spring Boot, React, and FFmpeg, with video chunking for seamless playback. Integrated
HLS.js and Video.js for adaptive streaming and a user-friendly interface styled with Tailwind CSS. Designed for high performance and cross-platform
compatibility, enabling efficient video delivery.`,
      link: `github.com/akshaykathwate/spring-video-stream`,
      technologies:
        "• Technologies Used: Springboot , ffmpeg, Mysql, Reactjs, videojs, hlsjs, Tailwind CSS",
    },
    {
      title: "Shopping Cart",
      description: `Developed a responsive shopping cart application using React, JavaScript, and Tailwind CSS, focusing on delivering a seamless user experience.Implemented state management to handle dynamic updates to the cart, ensuring real-time calculation of totals and item counts. Leveraged TailwindCSS for efficient and consistent styling, resulting in a clean, modern UI that enhances usability.`,
      link: `https://shoppingcartak14.netlify.app`,
      technologies: "• Technologies Used: React, JavaScript, TailwindCSS",
    },
    {
      title: "food_Restro",
      description: `The Food Restaurant Website is a basic project built with HTML, CSS, and JavaScript, offering a beautiful user interface for a delightful browsing experience.`,
      link: `https://food-restro.netlify.app/`,
      technologies: "• Technologies Used: HTML,CSS,JavaScript",
    },
  ]);

  // Function to handle "Show More" / "Show Less"
  const [showMore, setShowMore] = useState(Array(services.length).fill(false));

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  return (
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-slate-200 py-14">
      <h1 className="text-center font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-8">
        <Underline text="My Projects" />
      </h1>
      <div className="service-container grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-14">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
              <div className="card-header p-6 bg-slate-700 text-white">
                <h2 className="text-xl md:text-2xl font-semibold">
                  <Underline text={service.title} />
                </h2>
              </div>
              <div className="card-body p-6">
                <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 mb-4">
                  {showMore[index]
                    ? service.description
                    : `${service.description
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}...`}
                </p>
                <button
                  onClick={() => toggleShowMore(index)}
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 mb-4"
                >
                  {showMore[index] ? "Show Less" : "Show More"}
                </button>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                  {service.technologies}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <Button text="Visit" link={service.link} />
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    <Underline text=" View Project" link={service.link} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
