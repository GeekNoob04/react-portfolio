// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Harshit Budhraja
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
