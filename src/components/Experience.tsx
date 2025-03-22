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
  FaLanguage,
  FaVideo, // For Video Editing
  FaPalette // For Graphic Designing
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
  SiAmazon,
  SiCloudflare // For Cloud Computing
} from "react-icons/si";
import { MdVerified } from "react-icons/md";
import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Axceera',
    location: 'Sri Lanka',
    date: 'JAN 2025 - Present',
    description: 'Working on full-stack web development projects using modern technologies and best practices.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Avantrio Private Limited',
    location: 'Sri Lanka',
    date: 'JUL 2024 - JAN 2025',
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
  const iconMap: { [key: string]: { icon: React.ReactElement, color: string } } = {
    "Java": { icon: <FaJava />, color: "#f89820" },
    "Python": { icon: <FaPython />, color: "#3776AB" },
    "C++": { icon: <SiCplusplus />, color: "#00599C" },
    "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
    "SQL": { icon: <SiMysql />, color: "#00758F" }, // Fixed the color string
    "HTML": { icon: <FaHtml5 />, color: "#E34F26" },
    "CSS": { icon: <FaCss3Alt />, color: "#1572B6" },
    "React.js": { icon: <FaReact />, color: "#61DAFB" },
    "Node.js": { icon: <FaNodeJs />, color: "#339933" },
    "Nest.js": { icon: <SiNestjs />, color: "#E0234E" },
    "Astro.js": { icon: <SiAstro />, color: "#FF5D01" },
    "Gatsby.js": { icon: <SiGatsby />, color: "#663399" },
    "Docker": { icon: <FaDocker />, color: "#2496ED" },
    "Azure": { icon: <FaCloud />, color: "#0089D6" },
    "Cloud Computing": { icon: <SiCloudflare />, color: "#F38020" },
    "Video Editing": { icon: <FaVideo />, color: "#FF6347" },
    "Graphic Designing": { icon: <FaPalette />, color: "#FFD700" },
    "WordPress": { icon: <FaWordpress />, color: "#21759B" },
    "Blender": { icon: <SiBlender />, color: "#F5792A" },
    "AWS": { icon: <FaAws />, color: "#FF9900" },
  };

  const skillData = iconMap[skill];
  if (!skillData) return null;

  return (
    <motion.div
      className="relative w-24 h-24 flex items-center justify-center"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 2 } }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skillData.color}80, transparent)`,
          filter: "blur(15px)",
          opacity: 0.6,
        }}
      />
      <div
        className="relative w-16 h-16 flex items-center justify-center rounded-lg transform transition-all duration-300"
        style={{
          background: skillData.color,
          boxShadow: `0 6px 20px ${skillData.color}CC, inset 0 2px 5px rgba(255, 255, 255, 0.4), inset 0 -2px 5px rgba(0, 0, 0, 0.4)`,
          transform: "rotateX(20deg) rotateY(20deg)",
        }}
      >
        <div className="text-5xl transform" style={{ transform: "rotateX(-20deg) rotateY(-20deg)" }}>
          {React.cloneElement(skillData.icon, { style: { color: "#FFFFFF" } })}
        </div>
      </div>
    </motion.div>
  );
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
  return <MdVerified className="text-2xl text-purple-500 mr-4 flex-shrink-0" />;
};

const ConstellationBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: { x: number; y: number; color: string }[] = [];
    const numNodes = 50;

    // Generate random nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'][Math.floor(Math.random() * 5)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nodes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      // Animate nodes
      for (const node of nodes) {
        node.x += (Math.random() - 0.5) * 0.5;
        node.y += (Math.random() - 0.5) * 0.5;

        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(circle at center, #1a0033 0%, #000000 70%)' }}
    />
  );
};

const ExperienceCard = ({ experience, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
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
    <section id="experience" className="py-20 relative">
      <ConstellationBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Professional Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => ( // Fixed typo: Experiences -> experiences
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="relative p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-6 flex items-center justify-center">
                {category === "Programming Languages" && <FaCode className="mr-2" />}
                {category === "Web Development" && <FaCloud className="mr-2" />}
                {category === "Other Technical Skills" && <FaToolbox className="mr-2" />}
                {category === "Soft Skills" && <FaDatabase className="mr-2" />}
                {category === "Languages" && <FaLanguage className="mr-2" />}
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
                    }}
                  >
                    {getSkillIcon(item) || (
                      <span className="text-gray-300 text-lg">{item}</span>
                    )}
                    {getSkillIcon(item) && (
                      <span className="text-gray-300 text-sm">{item}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
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
              className="p-6 rounded-xl border border-purple-500/20 flex items-center hover:border-purple-500/50 transition-colors"
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
