import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center md:items-center items-start md:px-0 px-10 bg-[var(--color-bg-secondary)] w-full py-30 gap-4 rounded-2xl shadow-md overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex justify-end items-center pointer-events-none select-none">
        <h1
          className="text-[10rem] font-extrabold text-[var(--color-text-highlight)]
                     opacity-5 rotate-90 tracking-widest"
          style={{ userSelect: "none" }}
        >
          CODE
        </h1>
      </div>

      {/* Foreground Content */}
      <h1 className="font-londrina-outline text-[3rem] md:text-[5rem] text-[var(--color-text-highlight)] z-10">
        ABENEZER SELESHI
      </h1>

      <h3 className="text-[var(--color-text-secondary)] font-medium z-10">
        Full-Stack Web-Developer building modern, scalable applications.
      </h3>

      <a
        href="/resume/Abenezer-Seleshi-Abdisa-FlowCV-Resume-20251115.pdf"
        download
        className="py-4 px-6 rounded-2xl font-bold 
    text-[var(--color-text-highlight)] 
    border-[3px] border-[var(--color-text-highlight)] 
    bg-[color-mix(in_srgb,var(--color-text-highlight)_20%,transparent)] 
    hover:bg-[var(--color-text-highlight)] 
    hover:text-[var(--color-bg-secondary)] 
    hover:shadow-[0_0_30px_var(--color-text-highlight)] 
    transition-all duration-300 z-10"
      >
        Download Resume
      </a>
    </div>
  );
};

export default HeroSection;
