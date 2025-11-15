import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInCard = () => {
  return (
    <a
      href="https://www.linkedin.com/in/abenezer-seleshi-66038a246/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded p-3 
      flex flex-col items-center justify-center gap-4 cursor-pointer 
      hover:scale-105 transition-transform shadow-md"
    >
      <FaLinkedin className="text-4xl" />
      <h2 className="font-bold">LinkedIn</h2>
    </a>
  );
};

export default LinkedInCard;
