import React from "react";
import BackendProjectCard from "./BackendProjectCard";

const projects = [
  {
    id: 1,
    title: "House MarketPLace API",
    description:
      "A backend platform for a real estate service in Addis Ababa, featuring scalable APIs for property listing, search, and filtering. Includes secure authentication, payment workflow integration, and aims to streamline the house-hunting process by reducing search time by up to 40%.",
    stacks: ["React", "TypeScript", "CSS"],
    link: "https://github.com/example/projectone",
    status: true,
  },
];

const BackendProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <BackendProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          stacks={project.stacks}
          link={project.link}
          status={project.status}
        />
      ))}
    </div>
  );
};

export default BackendProjects;
