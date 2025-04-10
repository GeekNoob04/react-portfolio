import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

const XLogo = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
};

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 pb-6 sm:pt-16 sm:pb-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-800 pb-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <a href="#" className="inline-block">
              <h2 className="text-xl sm:text-2xl font-bold text-white relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Harshit Budhraja
                </span>
                <span className="block h-1 w-1/2 bg-purple-500 mt-1 mx-auto lg:mx-0"></span>
              </h2>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 lg:mb-0">
            {["About", "Skills", "Projects", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex space-x-4">
            {[
              {
                href: "https://github.com/GeekNoob04",
                icon: <Github className="w-5 h-5" />,
              },
              {
                href: "https://www.linkedin.com/in/harshit-budhraja-621a70251/",
                icon: <Linkedin className="w-5 h-5" />,
              },
              {
                href: "https://x.com/BudhrajaHarshit",
                icon: <XLogo className="w-5 h-5" />,
              },
              {
                href: "https://instagram.com/harshitisdelusional",
                icon: <Instagram className="w-5 h-5" />,
              },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors rounded-full bg-gray-800/50 p-2 backdrop-blur-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons (Mobile) */}
        <div className="flex justify-center space-x-6 mt-6 lg:hidden">
          {[
            {
              href: "https://github.com/GeekNoob04",
              icon: <Github className="w-5 h-5" />,
            },
            {
              href: "https://www.linkedin.com/in/harshit-budhraja-621a70251/",
              icon: <Linkedin className="w-5 h-5" />,
            },
            {
              href: "https://x.com/BudhrajaHarshit",
              icon: <XLogo className="w-5 h-5" />,
            },
            {
              href: "https://instagram.com/harshitisdelusional",
              icon: <Instagram className="w-5 h-5" />,
            },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors rounded-full bg-gray-800/50 p-2 backdrop-blur-sm"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll to top button */}
        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
