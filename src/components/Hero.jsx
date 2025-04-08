import React, { useEffect, useRef } from "react";

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/GeekNoob04", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshit-budhraja-621a70251/",
      icon: "linkedin",
    },
    {
      name: "X",
      url: "https://x.com/BudhrajaHarshit",
      icon: "x",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/harshitisdelusional/",
      icon: "instagram",
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
                  href="#contact"
                  className="px-5 py-2 bg-blue-600 rounded-md font-medium text-white transition-colors duration-300 hover:bg-blue-700 text-sm md:text-base"
                >
                  Contact Me
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
                  {link.icon === "github" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.icon === "x" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {link.icon === "instagram" && (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
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
