"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setMenuOpen(false);

    const section = document.querySelector(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;

      // Scroll so that the section is centered in the viewport
      const scrollTo = sectionTop - windowHeight / 2 + sectionHeight / 2;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-transparent flex justify-between items-center px-6 py-4 text-[var(--color-text-primary)] font-bold border-b border-[var(--color-border)] relative z-50">
      <h1 className="text-xl md:text-2xl">Abenezer Seleshi</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-end gap-6">
        <button
          onClick={() => handleClick("#about")}
          className="hover:text-[var(--color-text-highlight)] transition-colors"
        >
          About
        </button>
        <button
          onClick={() => handleClick("#skills")}
          className="hover:text-[var(--color-text-highlight)] transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => handleClick("#projects")}
          className="hover:text-[var(--color-text-highlight)] transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => handleClick("#contact")}
          className="hover:text-[var(--color-text-highlight)] transition-colors"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--color-text-primary)]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] flex flex-col items-start gap-4 px-6 py-4 shadow-md md:hidden animate-fadeIn">
          <button onClick={() => handleClick("#about")}>About</button>
          <button onClick={() => handleClick("#skills")}>Skills</button>
          <button onClick={() => handleClick("#projects")}>Projects</button>
          <button onClick={() => handleClick("#contact")}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
