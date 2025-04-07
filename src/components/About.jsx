// src/components/About.jsx
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="relative">
              <div className="w-full h-64 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 transform rotate-3"></div>
              <div className="absolute inset-0 w-full h-64 overflow-hidden rounded-lg border-2 border-purple-500">
                <img
                  src="/api/placeholder/300/300"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Student at Bennett University
            </h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate third-year B.Tech student specializing in Data
              Scince, with a strong foundation in both theoretical concepts and
              practical applications. I'm particularly enthusiastic about
              front-end web development, where I enjoy bringing user-friendly
              and visually appealing interfaces to life.
            </p>
            <p className="text-gray-300 mb-6">
              Throughout my academic journey, I've developed a solid grasp of
              data structures and algorithms, which helps me write efficient and
              optimized code. I'm also deeply interested in data science, where
              I love uncovering insights from data and building intelligent
              solutions. I’m always eager to explore new technologies,
              frameworks, and tools that help me grow and stay ahead in this
              ever-evolving tech landscape.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Education</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>B.Tech in Computer Science</li>
                  <li>Bennett University, 2022-2026</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Interests</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Web Development</li>
                  <li>Data Science</li>
                  <li>DSA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
