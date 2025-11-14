import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubCard = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded p-3 flex flex-col items-center justify-center gap-4">
      <FaGithub className="text-4xl" />
      <h2 className="font-bold">Github</h2>
    </div>
  );
};

export default GithubCard;
