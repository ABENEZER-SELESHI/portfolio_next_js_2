import React from "react";
import Image from "next/image";
import GithubCard from "./GithubCard";
import LinkedInCard from "./LinkedInCard";
import LeetcodeCard from "./LeetcodeCard";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-start bg-[var(--color-bg-secondary)] w-full p-8 gap-4 rounded-2xl shadow-md">
      <h1 className="font-black text-2xl text-[var(--color-text-primary)]">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:items-start">
        <Image
          src="/profile2.png"
          alt="Profile Picture"
          width={150}
          height={130}
          className="rounded-full"
        />
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-justify">
          Hello! I&apos;m Abenezer Seleshi, a passionate Full-Stack Web
          Developer with expertise in building modern and scalable web
          applications. With a strong foundation in both front-end and back-end
          technologies, I enjoy creating seamless user experiences and robust
          server-side solutions. My goal is to leverage my skills to develop
          innovative applications that solve real-world problems and enhance
          user engagement.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[color:var(--color-border)] my-4"></div>

      <div className="grid grid-cols-3 sm:grid-cols-10 gap-3 w-full">
        <GithubCard />
        <LinkedInCard />
        <LeetcodeCard />
      </div>
    </div>
  );
};

export default AboutMe;
