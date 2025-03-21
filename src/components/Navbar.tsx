'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["About", "Projects", "Articles", "Experience", "Contact"];

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
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {item}
            </Link>
          ))}

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
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-purple-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

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