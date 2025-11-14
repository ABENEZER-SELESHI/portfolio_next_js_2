import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer";
import TechStacks from "./components/TechStacks/TechStacks";
import FrontProjects from "./components/Projects/FrontProjects";
import BackendProjects from "./components/Projects/BackendProjects";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="relative min-h-screen flex justify-center scroll-smooth">
      {/* 🔹 Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/background/port_bg.jpeg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: "translateZ(0)",
        }}
      ></div>

      {/* 🔹 Foreground Content */}
      <div className="relative px-4 md:px-10 z-10 w-full max-w-[1200px] flex flex-col gap-16 bg-[color:var(--color-bg-primary)]/60 backdrop-blur-sm">
        <Header />
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <TechStacks />
        </section>
        <section id="projects" className="flex flex-col gap-16">
          <FrontProjects />
          <BackendProjects />
        </section>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
