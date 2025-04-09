import { useEffect, useState } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 bottom-0 left-0 transform translate-y-3 md:translate-y-4 rounded-full"></div>
          </h2>
        </div>

        <div className="backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 bg-gray-900/40 shadow-xl">
          <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Student at Bennett University
          </h3>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg">
            {isMobile ? (
              <p className="text-gray-200 leading-relaxed">
                I'm a passionate third-year B.Tech student specializing in Data
                Science. I'm enthusiastic about front-end web development, with
                skills in data structures and algorithms, helping me write
                efficient code.
              </p>
            ) : (
              <>
                <p className="text-gray-200 leading-relaxed">
                  I'm a passionate third-year B.Tech student specializing in
                  Data Science, with a strong foundation in both theoretical
                  concepts and practical applications. I'm particularly
                  enthusiastic about front-end web development, where I enjoy
                  bringing user-friendly and visually appealing interfaces to
                  life.
                </p>

                <p className="text-gray-200 leading-relaxed">
                  Throughout my academic journey, I've developed a solid grasp
                  of data structures and algorithms, which helps me write
                  efficient and optimized code. I'm also deeply interested in
                  data science, where I love uncovering insights from data and
                  building intelligent solutions. I'm always eager to explore
                  new technologies, frameworks, and tools that help me grow and
                  stay ahead in this ever-evolving tech landscape.
                </p>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12">
            <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-lg border-t border-l border-white/5 transition-all duration-300 hover:translate-y-1 hover:shadow-purple-500/20">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 md:mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-purple-400 text-lg md:text-xl">
                  Education
                </h4>
              </div>
              <ul className="text-gray-300 space-y-2 md:space-y-3 pl-3 md:pl-4 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 md:mr-3"></span>
                  Schooling at Nehru World School
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 md:mr-3"></span>
                  B.Tech in Computer Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 md:mr-3"></span>
                  Bennett University, 2022-2026
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-lg border-t border-l border-white/5 transition-all duration-300 hover:translate-y-1 hover:shadow-blue-500/20">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 md:mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-400 text-lg md:text-xl">
                  Interests
                </h4>
              </div>
              <ul className="text-gray-300 space-y-2 md:space-y-3 pl-3 md:pl-4 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></span>
                  Data Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></span>
                  DSA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
