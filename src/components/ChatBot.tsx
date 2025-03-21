'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdChatBubble, MdClose } from 'react-icons/md';

const botResponses = {
  greeting: "Hi! I'm Mudipa's portfolio bot. Ask me anything about his skills, experience, or projects!",
  skills: "Kishani is skilled in: \n• Web Development (React, Node.js, TypeScript)\n• Cloud Technologies (AWS)\n• Programming Languages (Java, Python, C++)\n• Other Skills: Docker, Azure, Cloud Computing",
  experience: "Kishani is currently working as:\n• Associate Software Engineer at Axceera (Mar 2024 - Present)\nPreviously:\n• Software Engineering Intern at Avantrio (Jan 2024 - Mar 2024)",
  projects: "Some notable projects include:\n• EmoCare - A mental health platform with mood-based chatbot\n• Skillshare - A collaborative peer-group platform\n• StockWise - An inventory management system",
  education: "Kishani has completed:\n• BSc (Hons) in Software Engineering\n• Multiple certifications in AWS, JavaScript, and Cyber Security",
  contact: "You can reach Kishani at:\n• Email: mudipakishanimayanga@gmail.com\n• LinkedIn: /in/kishanimudipa\n• GitHub: /kishani",
  default: "I'm not sure about that. Try asking about Kishani's skills, experience, projects, education, or how to contact her!"
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: botResponses.greeting, isBot: true }]);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Simple keyword matching for responses
    const lowercaseInput = userMessage.toLowerCase();
    let botResponse = botResponses.default;

    if (lowercaseInput.includes('skill') || lowercaseInput.includes('know') || lowercaseInput.includes('tech')) {
      botResponse = botResponses.skills;
    } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('work')) {
      botResponse = botResponses.experience;
    } else if (lowercaseInput.includes('project') || lowercaseInput.includes('portfolio')) {
      botResponse = botResponses.projects;
    } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study')) {
      botResponse = botResponses.education;
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('reach')) {
      botResponse = botResponses.contact;
    } else if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello') || lowercaseInput.includes('hey')) {
      botResponse = botResponses.greeting;
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Open chat"
      >
        <MdChatBubble className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-6 w-96 bg-[rgba(20,0,40,0.95)] backdrop-blur-sm border border-purple-500/20 rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-purple-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Portfolio Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-purple-900/30 text-white'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-purple-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-purple-900/30 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;