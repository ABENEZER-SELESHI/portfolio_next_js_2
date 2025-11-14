import React from "react";

type BackendProjectProps = {
  title: string;
  description: string;
  stacks: string[];
  link: string;
  status: boolean;
};

const BackendProjectCard = ({
  title,
  description,
  stacks,
  link,
  status,
}: BackendProjectProps) => {
  return (
    <div className="relative bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-4">
      {/* Status Label */}
      <h2
        className={`absolute top-2 right-2 px-3 py-1 text-sm rounded-full font-medium ${
          status
            ? "text-[var(--color-text-highlight)] bg-[color-mix(in_srgb,var(--color-text-highlight)_20%,transparent)]"
            : "text-[var(--color-error)] bg-[color-mix(in_srgb,var(--color-error)_20%,transparent)]"
        }`}
      >
        {status ? "Complete" : "In Progress"}
      </h2>

      {/* Content */}
      <h1 className="text-[var(--color-text-primary)] font-semibold text-xl mb-2">
        {title}
      </h1>

      <p className="text-[var(--color-text-secondary)] mb-4">{description}</p>

      {/* Tech Stacks */}
      <div className="flex flex-wrap text-[var(--color-text-highlight)] p-2 rounded-lg gap-2 bg-[color-mix(in_srgb,var(--color-text-highlight)_10%,transparent)]">
        {stacks.map((stack, index) => (
          <span
            key={index}
            className="text-sm font-medium bg-[var(--color-bg-primary)] px-2 py-1 rounded-md border border-[var(--color-border)]"
          >
            {stack}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4 text-[var(--color-text-secondary)] font-medium">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-text-highlight)] transition-colors"
        >
          {status ? "View Project" : "View Code"}
        </a>
      </div>
    </div>
  );
};

export default BackendProjectCard;
