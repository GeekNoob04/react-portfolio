// src/components/Projects.jsx
import { useState } from "react";
import cinceptionImg from "../images/cinception.png";
import namasteFoodImg from "../images/namaste-food.png";
import freeBieImg from "../images/freebie.png";
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cinception",
      description: "AI-Powered Movie and Series Recommendation Platform",
      image: cinceptionImg,
      tags: ["React", "AI", "Firebase", "JavaScript"],
      demoLink: "https://cinception.vercel.app/",
      codeLink: "https://github.com/GeekNoob04/cinception",
    },
    {
      id: 2,
      title: "Namaste Food",
      description: "Food Ordering Platform",
      image: namasteFoodImg,
      tags: ["React", "JavaScript", "Tailwind CSS", "Swiggy API"],
      demoLink: "https://namastepiggy.vercel.app/",
      codeLink: "https://github.com/GeekNoob04/Namaste-Food",
    },
    {
      id: 3,
      title: "FreeBie",
      description: "Personalized News Summary Platform",
      image: freeBieImg,
      tags: ["Python", "NLP", "HTML", "CSS", "JavaScript"],
      demoLink: "https://sitefreebie.netlify.app/",
      codeLink: "https://github.com/GeekNoob04/FreeBie",
    },
  ];

  const openProject = (id) => {
    setActiveProject(id === activeProject ? null : id);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-purple-500 ${
                activeProject === project.id
                  ? "col-span-1 sm:col-span-2 lg:col-span-3"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-purple-800/40 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className={`text-gray-300 text-sm sm:text-base ${
                    activeProject === project.id ? "" : "line-clamp-2"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <button
                    onClick={() => openProject(project.id)}
                    className="text-purple-400 hover:text-purple-300 text-sm sm:text-base"
                  >
                    {activeProject === project.id ? "View Less" : "View More"}
                  </button>

                  <div className="flex space-x-3 sm:space-x-4 w-full sm:w-auto justify-end">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                    >
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
