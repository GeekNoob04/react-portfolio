import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

// Custom X Logo component
const XLogo = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/GeekNoob04",
      icon: (props) => <Github {...props} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshit-budhraja-621a70251/",
      icon: (props) => <Linkedin {...props} />,
    },
    {
      name: "X",
      url: "https://x.com/BudhrajaHarshit",
      icon: (props) => <XLogo {...props} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/harshitisdelusional/",
      icon: (props) => <Instagram {...props} />,
    },
  ];

  const canvasRef = useRef(null);

  // Network particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particles
    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Network background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Enhanced color gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-transparent animate-gradient-slow pointer-events-none"></div>

      {/* Additional floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-600/10 blur-xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-600/10 blur-xl animate-float-medium"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
          {/* Left side - Text content */}
          <div className="w-full md:w-2/3 relative backdrop-blur-md p-5 md:p-8 rounded-xl border border-white/10 bg-black/20 shadow-glow transition-all duration-500 hover:shadow-glow-intense">
            {/* Enhanced geometric accent shapes with animations */}
            <div className="absolute -top-8 -right-8 w-12 md:w-16 h-12 md:h-16 border-t-2 border-r-2 border-purple-500 rotate-12 opacity-70 animate-pulse-slow hidden sm:block"></div>
            <div className="absolute -bottom-8 -left-8 w-12 md:w-16 h-12 md:h-16 border-b-2 border-l-2 border-blue-500 -rotate-12 opacity-70 animate-pulse-slow delay-150 hidden sm:block"></div>

            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight">
                <span className="block text-gray-100 mb-1 animate-fade-in text-sm sm:text-base md:text-xl">
                  Hi, I'm
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-shimmer">
                  Harshit Budhraja
                </span>
              </h1>

              <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 my-3 md:my-4 animate-expand"></div>

              <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3 text-gray-200 tracking-wide">
                B.Tech Student at Bennett University
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6 max-w-md leading-relaxed">
                Building beautiful and functional web experiences
              </p>

              {/* Simplified CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1NHEYsXvkS49xNscykRWXZqvJrL_LjZZ9/view?usp=sharing"
                  className="px-5 py-2 bg-blue-600 rounded-md font-medium text-white transition-colors duration-300 hover:bg-blue-700 text-sm md:text-base"
                  download="Harshit_Budhraja_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="px-5 py-2 bg-transparent border border-blue-500 rounded-md font-medium text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Social links (vertical on desktop, horizontal on mobile) */}
          <div className="flex flex-row md:flex-col mt-6 md:mt-0 space-y-0 space-x-4 md:space-x-0 md:space-y-6 relative backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/10 bg-black/20">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white relative group transition-all duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md blur-sm group-hover:blur-md transition-all duration-300 opacity-50 group-hover:opacity-80"></div>
                <div className="relative p-2 border border-white/30 rounded-md bg-black/30 backdrop-blur-sm group-hover:border-white/50">
                  {link.icon({ className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
