'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = menuItems.map(item => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase())
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection ? currentSection.id : '');
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = ["About", "Projects", "Articles", "Experience", "Contact"];

  // Add the external link under Projects
  const externalLinks = [
    {
      name: "SE Learning Hub",
      href: "https://selearning.netlify.app",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-white hover:text-purple-400 transition-colors",
      ariaLabel: "SE Learning Hub"
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full px-6 py-4 z-20 ${
        scrolled ? "bg-[rgba(0,0,0,0.8)] backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          MK
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-white hover:text-purple-400 transition-colors ${
                activeSection === item.toLowerCase() ? 'text-purple-400 font-medium' : ''
              }`}
            >
              {item}
            </button>
          ))}
          {activeSection === "projects" && (
            externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className={link.className}
                aria-label={link.ariaLabel}
              >
                {link.name}
              </a>
            ))
          )}
          {/* Social Links */}
          <div className="flex items-center space-x-4 ml-4 border-l border-white/20 pl-4">
            <a
              href="https://github.com/mk1shan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mudipa-kishan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/@mudipakishanimayanga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Medium"
            >
              <FaMedium className="w-5 h-5" />
            </a>
            <a
              href="mailto:mudipakishanimayanga@gmail.com"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <MdEmail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[rgba(0,0,0,0.95)] backdrop-blur-md"
          >
            <div className="p-4 space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left text-white hover:text-purple-400 transition-colors py-2 ${
                      activeSection === item.toLowerCase() ? 'text-purple-400 font-medium' : ''
                    }`}
                  >
                    {item}
                  </button>
                </motion.div>
              ))}
              {activeSection === "projects" && (
                externalLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className={link.className}
                      aria-label={link.ariaLabel}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))
              )}
              {/* Social Links for Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="pt-4 border-t border-white/20"
              >
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/mk1shan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mudipa-kishan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                  <a
                    href="https://medium.com/@mudipakishanimayanga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                    aria-label="Medium"
                  >
                    <FaMedium className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:mudipakishanimayanga@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                    aria-label="Email"
                  >
                    <MdEmail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;