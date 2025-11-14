import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "/projects/frontend/shopAlly.png",
    title:
      "ShopAlly: AI AliExpress product search and recommendation assistant",
    description:
      "ShopAlly is a full-featured e-commerce platform with payment integration and responsive design.",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "OAuth"],
    link: "https://shop-ally-ai.vercel.app/landing-page",
    status: true,
    videoUrl: "https://www.youtube.com/watch?v=VlX8h9OUq9M",
  },
  {
    id: 2,
    image: "/projects/frontend/StarterProjectG68HomePage.webp",
    title: "Starter Project",
    description: "A minimal Next.js starter project setup.",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "NextAuth"],
    link: "https://github.com/example/projecttwo",
    status: true,
    videoUrl: "https://www.youtube.com/watch?v=vKxbEmcekRo&feature=youtu.be",
  },
];

const FrontProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          stacks={project.stacks}
          link={project.link}
          status={project.status}
          videoUrl={project.videoUrl}
        />
      ))}
    </div>
  );
};

export default FrontProjects;
