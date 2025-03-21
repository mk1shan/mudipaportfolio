'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "EmoCare",
    description: "A comprehensive mental health platform featuring a mood-based chatbot, personalized self-care plans, and interactive tools for mental wellness tracking.",
    tech: ["RASA", "Python", "React.js", "Firebase", "Cohere LLM"],
    year: "2024",
    link: "https://github.com/mk1shan/mental-health-project",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Skillshare",
    description: "A collaborative peer-group platform with Feed, Profile, Article, and Search capabilities, enabling users to share expertise and connect with others.",
    tech: ["React.js", "Firebase", "Node.js", "Express.js"],
    year: "2024",
    link: "https://github.com/mk1shan/skill_share",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "StockWise",
    description: "An inventory management system handling categories, users, customers, and orders for retail businesses.",
    tech: ["Java", "MySQL"],
    year: "2024",
    link: "https://github.com/mk1shan/Inventory--Management-system",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Tiny Teeth",
    description: "A dental hospital management system with doctor management, patient details, and homepage components.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    year: "2022",
    link: "https://github.com/mk1shan/Denatl-Hospital-Mnagaement-System",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
  }
];

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    year: string;
    link: string;
    image: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
          <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          </div>

          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {project.title}
            </h3>
            <span className="text-purple-400">{project.year}</span>
          </div>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-900/30 rounded-full text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <motion.div
            animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
            className="absolute -bottom-2 -right-2 w-20 h-20"
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;