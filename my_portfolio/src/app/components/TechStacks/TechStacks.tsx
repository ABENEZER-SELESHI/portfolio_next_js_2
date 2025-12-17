import React from "react";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAngular,
} from "react-icons/fa";
import TechCards from "./TechCards";
import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";

const TechStacks = () => {
  const techData = [
    { icon: FaGithub, name: "GitHub" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: FaPython, name: "Python" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaDatabase, name: "MongoDB" },
    { icon: DiPostgresql, name: "PostgreSQL" },
    { icon: FaAngular, name: "Angular" },
  ];

  return (
    <div className="flex flex-col justify-center items-start bg-[var(--color-bg-secondary)] w-full p-8 gap-4 rounded-2xl shadow-md">
      <h1 className="font-black text-2xl text-[var(--color-text-primary)]">
        Tech Stacks
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-8 gap-4 w-full">
        {techData.map((tech, index) => (
          <TechCards key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
