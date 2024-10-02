import { useState } from "react";

const Projects = () => {
  const [services] = useState([
    {
      title: "Shopping Cart",
      description: `A React Shopping Cart Website With Home and Cart Sections ...`,
      link: `https://shoppingcartak14.netlify.app`,
    },
    {
      title: "Background Changer",
      description: `The "BG_Changer designed to allow users to change the background color of the webpage dynamically.`,
      link: `https://bgchangerweb.netlify.app/`,
    },
    {
      title: "food_Restro",
      description: `Our Restaurant Website, THE food Restraurent Website is your gateway to a delightful culinary journey. Webpage offers a Beautiful User interface.`,
      link: `https://food-restro.netlify.app/`,
    },
  ]);

  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [index]: !prevShowMore[index],
    }));
  };

  return (
    <div className="main-container py-14 dark:bg-slate-900 dark:text-slate-100">
      <h1 className="text-center underline font-bold text-2xl md:text-3xl">
        My Projects
      </h1>
      <div className="service-container flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-5 md:p-10 justify-evenly m-8 md:m-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service${
              index + 1
            } space-y-4 shadow-lg rounded-xl bg-slate-200 text-center p-5 hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-100 dark:shadow-purple-600`}
          >
            <h1 className="text-2xl md:text-4xl">{service.title}</h1>
            <p className="md:block p-3">
              {showMore[index]
                ? service.description
                : `${service.description.split(" ").slice(0, 8).join(" ")}...`}
              <button
                className="text-blue-500 cursor-pointer"
                onClick={() => toggleShowMore(index)}
              >
                {showMore[index] ? "Show Less" : "Show More"}
              </button>
            </p>

            <div className="m-5">
              <a
                href={service.link}
                rel="noreferrer"
                target="_blank"
                className="bg-black-500 dark:bg-slate-800 font-serif rounded-full px-5 p-3  text-lg"
              >
                Visit{" "}
                <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
