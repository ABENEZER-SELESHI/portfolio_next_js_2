import React from "react";

const TechCards = ({ icon: Icon, name }) => {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded p-3 flex flex-col items-center justify-center gap-4 shadow-md hover:scale-105 transition-transform">
      <Icon className="text-4xl" />
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default TechCards;
