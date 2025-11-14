"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  stacks: string[];
  link: string;
  status: boolean;
  videoUrl?: string; // optional video link
};

const ProjectCard = ({
  image,
  title,
  description,
  stacks,
  link,
  status,
  videoUrl,
}: ProjectProps) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const cardRef = useRef<HTMLDivElement | null>(null);

  // Capture position when showing popups
  useLayoutEffect(() => {
    if ((showFullDesc || showVideo) && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [showFullDesc, showVideo]);

  // Extract YouTube embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      {/* Main Project Card */}
      <div
        ref={cardRef}
        className="relative bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      >
        {/* Image/Video Preview Section */}
        <div
          className="relative w-full h-56 cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Play button overlay */}
          {videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="bg-white text-black rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                ▶
              </div>
            </div>
          )}

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
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h1 className="text-[var(--color-text-primary)] font-semibold text-xl mb-2">
            {title}
          </h1>

          {/* Description */}
          <p
            className="text-[var(--color-text-secondary)] mb-2 line-clamp-2"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>

          {description.length > 120 && (
            <button
              onClick={() => setShowFullDesc(true)}
              className="text-[var(--color-text-highlight)] text-sm hover:underline"
            >
              More...
            </button>
          )}

          {/* Tech Stacks */}
          <div className="flex flex-wrap text-[var(--color-text-highlight)] p-2 rounded-lg gap-2 bg-[color-mix(in_srgb,var(--color-text-highlight)_10%,transparent)] mt-3">
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
      </div>

      {/* Full Description Popover */}
      {showFullDesc && (
        <div
          className="absolute z-50 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] p-6 rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
            transform: "scale(1.05)",
          }}
        >
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-[var(--color-text-secondary)] mb-4 whitespace-pre-wrap">
            {description}
          </p>
          <button
            onClick={() => setShowFullDesc(false)}
            className="text-[var(--color-text-highlight)] font-medium hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* Video Popup */}
      {showVideo && videoUrl && (
        <div
          className="absolute z-50 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out bg-black"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${position.width}px`,
            height: "auto",
            transform: "scale(1.05)",
          }}
        >
          <iframe
            width="100%"
            height="315"
            src={getEmbedUrl(videoUrl)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-sm"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
