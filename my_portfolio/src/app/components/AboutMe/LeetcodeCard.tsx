import React from "react";
import { SiLeetcode } from "react-icons/si";

const LeetcodeCard = () => {
  return (
    <a
      href="https://leetcode.com/u/AbenezerSeleshi/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded p-3 
      flex flex-col items-center justify-center gap-4 cursor-pointer 
      hover:scale-105 transition-transform shadow-md"
    >
      <SiLeetcode className="text-4xl" />
      <h2 className="font-bold">Leetcode</h2>
    </a>
  );
};

export default LeetcodeCard;
