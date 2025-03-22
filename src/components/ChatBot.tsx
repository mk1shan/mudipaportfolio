'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdChatBubble, MdClose } from 'react-icons/md';

const botResponses = {
  greeting: "Hi! I'm Mudipa's portfolio bot. I'd love to tell you about him - he's a passionate  software engineer who loves creating amazing web experiences!",
  skills: "Mudipa is skilled in: \n• Frontend Development (React, Next.js, TypeScript)\n• Backend Development (Node.js, Express)\n• Cloud Technologies (AWS)\n• Programming Languages (Java, Python, C++)\n• UI/UX Design\n• Other Skills: Docker, Azure, Cloud Computing",
  experience: "Mudipa is currently working as:\n• Associate Software Engineer at Axceera (Mar 2024 - Present)\nPreviously:\n• Software Engineering Intern at Avantrio (Jan 2024 - Mar 2024)\n\nHe's passionate about building scalable web applications and solving complex problems!",
  projects: "Some of Mudipa's notable projects include:\n• EmoCare - A mental health platform with mood-based chatbot\n• Skillshare - A collaborative peer-group platform\n• StockWise - An inventory management system\n• Portfolio Website - This beautiful website you're currently exploring!",
  education: "Mudipa has completed:\n• BSc (Hons) in Software Engineering\n• Multiple certifications in AWS, JavaScript, and Cyber Security\n\nHe's constantly learning and staying updated with the latest tech trends!",
  contact: "You can reach Mudipa at:\n• Email: mudipakishanimayanga@gmail.com\n• LinkedIn: /in/kishanimudipa\n• GitHub: /kishani\n\nHe's always open to interesting discussions and opportunities!",
  hobbies: "When not coding, Mudipa enjoys:\n• Learning new technologies\n• Contributing to open-source projects\n• Problem-solving\n• Tech blogging\n• Gaming",
  about: "Let me tell you about Mudipa!\n• He's a  software engineer with a passion for web development\n• Known for his problem-solving skills and attention to detail\n• Always eager to learn and experiment with new technologies\n• Values clean code and best practices\n• Believes in continuous learning and improvement",
  default: "I'm not sure about that. Try asking about Mudipa's skills, experience, projects, education, hobbies, or how to contact him! You can also ask about who he is!"
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

    // Enhanced keyword matching for responses
    const lowercaseInput = userMessage.toLowerCase();
    let botResponse = botResponses.default;

    if (lowercaseInput.includes('skill') || lowercaseInput.includes('know') || lowercaseInput.includes('tech') || lowercaseInput.includes('capable')) {
      botResponse = botResponses.skills;
    } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('work') || lowercaseInput.includes('job')) {
      botResponse = botResponses.experience;
    } else if (lowercaseInput.includes('project') || lowercaseInput.includes('portfolio') || lowercaseInput.includes('built')) {
      botResponse = botResponses.projects;
    } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study') || lowercaseInput.includes('degree')) {
      botResponse = botResponses.education;
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('reach') || lowercaseInput.includes('connect')) {
      botResponse = botResponses.contact;
    } else if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello') || lowercaseInput.includes('hey') || lowercaseInput.includes('start')) {
      botResponse = botResponses.greeting;
    } else if (lowercaseInput.includes('hobby') || lowercaseInput.includes('interest') || lowercaseInput.includes('free time') || lowercaseInput.includes('fun')) {
      botResponse = botResponses.hobbies;
    } else if (lowercaseInput.includes('who') || lowercaseInput.includes('about') || lowercaseInput.includes('person') || lowercaseInput.includes('tell me more')) {
      botResponse = botResponses.about;
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
