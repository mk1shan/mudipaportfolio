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
      // Replace with your form handling logic (e.g., email service, API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="text-gray-300 flex items-center">
                  <MdEmail className="mr-2" />
                  <span className="text-pink-400">Email:</span>{' '}
                  <a href="mailto:mudipakishanimayanga@gmail.com" className="hover:text-purple-400 transition-colors ml-2">
                    mudipakishanimayanga@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 flex items-center">
                  <MdLocationOn className="mr-2" />
                  <span className="text-pink-400">Location:</span>{' '}
                  <span className="ml-2">Sri Lanka</span>
                </p>

                {/* Social Links */}
                <div className="pt-4 border-t border-purple-500/20">
                  <h4 className="text-purple-400 mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/mk1shan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mudipa-kishan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                    <a
                      href="https://medium.com/@mudipakishanimayanga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      aria-label="Medium"
                    >
                      <FaMedium className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteering Experience */}
            <div className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                <MdVolunteerActivism className="mr-2" /> Volunteering Experience
              </h3>
              <ul className="space-y-3">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-purple-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-purple-900/20 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;