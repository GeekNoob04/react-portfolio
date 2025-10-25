const Skills = () => {
    const skills = [
        {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Tailwind CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "PostgreSQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },

        {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
    ];

    return (
        <section
            id="skills"
            className="py-16 md:py-20 px-3 md:px-4 bg-black relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #000000 0%, #090117 100%)",
            }}
        >
            {/* Stars background */}
            <div className="stars-container absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="star absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            animation: `twinkle ${
                                Math.random() * 5 + 3
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-center text-white">
                    Skills
                </h2>

                <div className="flex justify-center">
                    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-8 md:gap-x-12 md:gap-y-16">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-item flex flex-col items-center"
                                style={{
                                    animation: `float 6s ease-in-out infinite`,
                                    animationDelay: `${index * 0.2}s`,
                                }}
                            >
                                <div className="skill-logo-container">
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="skill-logo w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                                        style={{
                                            filter:
                                                skill.name === "GitHub"
                                                    ? "invert(1)"
                                                    : "none",
                                        }}
                                        title={skill.name}
                                        draggable="false"
                                    />
                                </div>
                                <p className="text-white text-xs mt-2 text-center opacity-80">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
          
          .skill-logo-container {
            transition: transform 0.3s ease;
          }
          
          .skill-item:hover .skill-logo-container {
            transform: translateY(-5px);
          }

          /* Custom XS breakpoint */
          @media (max-width: 475px) {
            .xs\\:grid-cols-4 {
              grid-template-columns: repeat(5, minmax(0, 1fr));
            }
          }
        `,
                }}
            />
        </section>
    );
};

export default Skills;
