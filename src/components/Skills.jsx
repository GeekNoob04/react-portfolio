import { useEffect, useRef } from "react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Google Colab",
      logo: "https://colab.research.google.com/img/colab_favicon_256px.png",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-black relative overflow-hidden"
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
        <h2 className="text-4xl font-bold mb-20 text-center text-white">
          Skills
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-12 gap-y-16">
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
                    className="skill-logo w-12 h-12 object-contain"
                    style={{
                      filter: skill.name === "GitHub" ? "invert(1)" : "none",
                    }}
                    title={skill.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Skills;
