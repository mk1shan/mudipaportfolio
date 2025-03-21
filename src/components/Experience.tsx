'use client';

import { motion } from "framer-motion";
import { 
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaCloud,
  FaWordpress,
  FaAws,
  FaCode,
  FaToolbox,
  FaDatabase,
  FaLanguage
} from "react-icons/fa6";
import { 
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiAstro,
  SiGatsby,
  SiBlender,
  SiCisco,
  SiCoursera,
  SiUdemy,
  SiAmazon
} from "react-icons/si";
import { MdVerified } from "react-icons/md";
import React from 'react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Axceera',
    location: 'Sri Lanka',
    date: 'Mar 2024 - Present',
    description: 'Working on full-stack web development projects using modern technologies and best practices.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Avantrio Private Limited',
    location: 'Sri Lanka',
    date: 'Jan 2024 - Mar 2024',
    description: 'Working on web development projects using React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
];

const skills = {
  "Programming Languages": ["Java", "SQL", "C++", "JavaScript", "Python"],
  "Web Development": ["HTML", "CSS", "React.js", "Node.js", "Nest.js", "Astro.js", "Gatsby.js"],
  "Other Technical Skills": ["Docker", "Azure", "Cloud Computing", "Video Editing", "Graphic Designing", "WordPress", "Blender"],
  "Soft Skills": ["Team Work", "Time Management", "Communication", "Leadership"],
  "Languages": ["English", "Sinhala (Native)"]
};

const certifications = [
  "CISCO: JavaScript Essentials 1",
  "AWS Educate: Getting Started with Compute",
  "AWS Educate: Getting Started with Storage",
  "AWS Educate: Introduction to Cloud 101",
  "Coursera: AWS Services Overview for IT Professionals",
  "UDEMY: Introduction to Cyber Security",
  "SIMPLILEARN: Become Job-Ready in Coding: Basics of Data Structures and Algorithms"
];

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    "Java": <FaJava className="mr-2" />,
    "Python": <FaPython className="mr-2" />,
    "C++": <SiCplusplus className="mr-2" />,
    "JavaScript": <SiJavascript className="mr-2" />,
    "SQL": <SiMysql className="mr-2" />,
    "HTML": <FaHtml5 className="mr-2" />,
    "CSS": <FaCss3Alt className="mr-2" />,
    "React.js": <FaReact className="mr-2" />,
    "Node.js": <FaNodeJs className="mr-2" />,
    "Nest.js": <SiNestjs className="mr-2" />,
    "Astro.js": <SiAstro className="mr-2" />,
    "Gatsby.js": <SiGatsby className="mr-2" />,
    "Docker": <FaDocker className="mr-2" />,
    "Azure": <FaCloud className="mr-2" />,
    "WordPress": <FaWordpress className="mr-2" />,
    "Blender": <SiBlender className="mr-2" />,
    "AWS": <FaAws className="mr-2" />
  };
  return iconMap[skill] || null;
};

const getCertificationIcon = (certification: string) => {
  if (certification.startsWith('CISCO')) {
    return <SiCisco className="text-2xl text-[#1BA0D7] mr-4 flex-shrink-0" />;
  }
  if (certification.startsWith('AWS') || certification.includes('AWS')) {
    return <SiAmazon className="text-2xl text-[#FF9900] mr-4 flex-shrink-0" />;
  }
  if (certification.startsWith('Coursera')) {
    return <SiCoursera className="text-2xl text-[#0056D2] mr-4 flex-shrink-0" />;
  }
  if (certification.startsWith('UDEMY')) {
    return <SiUdemy className="text-2xl text-[#A435F0] mr-4 flex-shrink-0" />;
  }
  // Default verified icon for others (like SIMPLILEARN)
  return <MdVerified className="text-2xl text-purple-500 mr-4 flex-shrink-0" />;
};

const ExperienceCard = ({ experience, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="bg-[rgba(20,0,40,0.8)] backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
    <p className="text-purple-400 mb-1">{experience.company}</p>
    <p className="text-gray-400 mb-4">{experience.date}</p>
    <p className="text-gray-300 mb-4">{experience.description}</p>
    <div className="flex flex-wrap gap-2">
      {experience.skills.map((skill: string) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm bg-purple-900/30 rounded-full text-purple-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="relative w-full">
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Professional Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-[rgba(20,0,40,0.8)] p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  {category === "Programming Languages" && <FaCode className="mr-2" />}
                  {category === "Web Development" && <FaCloud className="mr-2" />}
                  {category === "Other Technical Skills" && <FaToolbox className="mr-2" />}
                  {category === "Soft Skills" && <FaDatabase className="mr-2" />}
                  {category === "Languages" && <FaLanguage className="mr-2" />}
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center">
                      {getSkillIcon(item)}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={certification} 
              className="bg-[rgba(20,0,40,0.8)] p-6 rounded-xl border border-purple-500/20 flex items-center hover:border-purple-500/50 transition-colors"
            >
              {getCertificationIcon(certification)}
              <p className="text-gray-300">{certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;