import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInCard = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded p-3 flex flex-col items-center justify-center gap-4">
      <FaLinkedin className="text-4xl" />
      <h2 className="font-bold">LinkedIn</h2>
    </div>
  );
};

export default LinkedInCard;
