import cinceptionImg from "../images/cinception.png";
import leetmentorImg from "../images/leetmentor.png";
import mementoImg from "../images/memento.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "LeetMentor AI",
            description: "Intelligent LeetCode Insights Platform",
            image: leetmentorImg,
            tags: ["Next.js", "PostgreSQL", "Recharts", "Gemini API"],
            demoLink: "https://leetmentor-ai.vercel.app/",
            codeLink: "https://github.com/GeekNoob04/leetcode-ai-mentor",
        },
        {
            id: 2,
            title: "Cinception",
            description: "AI-Powered Movie and Series Recommendation Platform",
            image: cinceptionImg,
            tags: ["React", "AI", "Firebase", "JavaScript"],
            demoLink: "https://cinception.vercel.app/",
            codeLink: "https://github.com/GeekNoob04/cinception",
        },
        {
            id: 3,
            title: "Memento",
            description: "Daily Journal App",
            image: mementoImg,
            tags: ["Next.js", "TypeScript", "NextAuth", "Prisma + SQL"],
            demoLink: "https://memento-journal.vercel.app/",
            codeLink: "https://github.com/GeekNoob04/daily-journal",
        },
    ];

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        My Projects
                    </span>
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Thumbnail - adjusting height for better mobile appearance */}
                                <div className="w-full md:w-2/5 h-52 sm:h-56 md:h-auto relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content - improved padding and spacing for mobile */}
                                <div className="w-full md:w-3/5 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-700 rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between sm:justify-start sm:space-x-6 mt-2 sm:mt-0">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                                        >
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                            </svg>
                                            <span className="whitespace-nowrap">
                                                Live Demo
                                            </span>
                                        </a>
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                                        >
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <span className="whitespace-nowrap">
                                                View Code
                                            </span>
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
