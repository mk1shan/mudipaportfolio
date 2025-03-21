'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdVolunteerActivism, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400">Let's connect and create something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 mx-auto"
          >
            <div className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">Contact Information</h3>
              <div className="space-y-4 text-center">
                <p className="text-gray-300 flex items-center justify-center">
                  <MdEmail className="mr-2" />
                  <span className="text-pink-400">Email:</span>{' '}
                  <a href="mailto:mudipakishanimayanga@gmail.com" className="hover:text-purple-400 transition-colors ml-2">
                    mudipakishanimayanga@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 flex items-center justify-center">
                  <MdLocationOn className="mr-2" />
                  <span className="text-pink-400">Mobile:</span>{' '}
                  <span className="ml-2">+94712416779</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Volunteering Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 mx-auto"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center justify-center">
              <MdVolunteerActivism className="mr-2" /> Volunteering Experience
            </h3>
            <ul className="space-y-3 text-center">
              <li className="text-gray-300">
                <span className="text-pink-400">SEDSKDU:</span>{' '}
                Chapter Representative (Jan 2024-Oct 2024)
              </li>
              <li className="text-gray-300">
                <span className="text-pink-400">SEDSKDU:</span>{' '}
                Lead of Media Division (Feb 2023-Feb 2024)
              </li>
              <li className="text-gray-300">
                <span className="text-pink-400">SEDS Sri Lanka:</span>{' '}
                Member of SEDS Observation Division (Jun 2023-Aug 2024)
              </li>
              <li className="text-gray-300">
                <span className="text-pink-400">BCSKDU & Rotaract Club KDU:</span>{' '}
                Design Team Member (Feb 2023-Jul 2023)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <footer className="bg-[rgba(20,0,40,0.9)] text-gray-300 py-6 mt-16 w-full">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold text-purple-400">© 2025 Mudipa Kishan. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/mk1shan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mudipa-kishan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://medium.com/@mudipakishanimayanga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Medium"
            >
              <FaMedium className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;