'use client';

import React, { useState, useEffect, useRef } from 'react'; // Added React import for React.cloneElement
import { motion } from 'framer-motion';
import Image from 'next/image';
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
  FaVideo,
  FaPalette
} from "react-icons/fa6";
import { 
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiAstro,
  SiGatsby,
  SiBlender,
  SiCloudflare
} from "react-icons/si";

const projects = [
  {
    title: "EmoCare",
    description: "A comprehensive mental health platform featuring a mood-based chatbot, personalized self-care plans, and interactive tools for mental wellness tracking.",
    tech: ["RASA", "Python", "React.js", "Firebase", "Cohere LLM"],
    year: "2024",
    link: "https://github.com/mk1shan/mental-health-project",
    image: "/emocare.jpg",
  },
  {
    title: "SE Learning Hub",
    description: "An interactive learning platform for software engineering students featuring comprehensive course materials, coding exercises, and real-time collaboration tools.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Socket.io"],
    year: "2024",
    link: "https://github.com/mk1shan/se-learning-hub",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
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

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: { icon: React.ReactElement, color: string } } = {
    "Java": { icon: <FaJava />, color: "#f89820" },
    "Python": { icon: <FaPython />, color: "#3776AB" },
    "C++": { icon: <SiCplusplus />, color: "#00599C" },
    "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
    "SQL": { icon: <SiMysql />, color: "#00758F" },
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
    "RASA": { icon: <FaPython />, color: "#FF4500" },
    "Firebase": { icon: <FaCloud />, color: "#FFA611" },
    "Cohere LLM": { icon: <FaCloud />, color: "#00CED1" },
    "Next.js": { icon: <FaReact />, color: "#000000" },
    "TypeScript": { icon: <SiJavascript />, color: "#3178C6" },
    "Tailwind CSS": { icon: <FaCss3Alt />, color: "#38B2AC" },
    "MongoDB": { icon: <SiMysql />, color: "#47A248" },
    "Socket.io": { icon: <FaNodeJs />, color: "#FFFFFF" },
    "Express.js": { icon: <FaNodeJs />, color: "#000000" },
    "MySQL": { icon: <SiMysql />, color: "#00758F" },
    "PHP": { icon: <FaCloud />, color: "#777BB4" },
  };

  const skillData = iconMap[skill];
  if (!skillData) return null;

  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skillData.color}80, transparent)`,
          filter: "blur(10px)",
          opacity: 0.6,
        }}
      />
      <div
        className="relative w-12 h-12 flex items-center justify-center rounded-lg transform transition-all duration-300"
        style={{
          background: skillData.color,
          boxShadow: `0 4px 15px ${skillData.color}CC, inset 0 1px 3px rgba(255, 255, 255, 0.4), inset 0 -1px 3px rgba(0, 0, 0, 0.4)`,
          transform: "rotateX(20deg) rotateY(20deg)",
        }}
      >
        <div className="text-3xl transform" style={{ transform: "rotateX(-20deg) rotateY(-20deg)" }}>
          {React.cloneElement(skillData.icon, { style: { color: "#FFFFFF" } })}
        </div>
      </div>
    </motion.div>
  );
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

const ProjectCard = ({ project, index }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / rect.height) * 20; // Max tilt 20 degrees
    const tiltY = -(x / rect.width) * 20;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3 } }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="relative p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 bg-[rgba(20,0,40,0.5)] backdrop-blur-md"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            boxShadow: isHovered
              ? `0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)`
              : `0 0 15px rgba(147, 51, 234, 0.2)`,
            transition: 'transform 0.1s ease, box-shadow 0.3s ease',
          }}
        >
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
          <div className="flex flex-wrap gap-4 justify-center">
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: techIndex * 0.1 }}
              >
                {getSkillIcon(tech) || (
                  <span className="text-gray-300 text-sm">{tech}</span>
                )}
                {getSkillIcon(tech) && (
                  <span className="text-gray-300 text-xs">{tech}</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
            className="absolute -bottom-2 -right-2 w-20 h-20"
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <ConstellationBackground />

      <div className="container mx-auto px-6 relative z-10">
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
