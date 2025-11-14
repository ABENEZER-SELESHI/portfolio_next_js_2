"use client";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-start justify-center bg-[var(--color-bg-secondary)] w-full p-8 gap-6 rounded-2xl shadow-md"
    >
      <h1 className="text-3xl font-black text-[var(--color-text-primary)]">
        Let&apos;s Connect
      </h1>

      <p className="text-[var(--color-text-secondary)] mb-4">
        Have a project in mind or just want to say hi? Feel free to reach out —
        I&apos;m always open to discussing new ideas and collaborations.
      </p>

      <form className="w-full flex flex-col gap-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[var(--color-text-primary)] font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-text-highlight)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[var(--color-text-primary)] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-text-highlight)]"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[var(--color-text-primary)] font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Write your message here..."
            className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-text-highlight)] resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="self-start bg-[var(--color-text-highlight)] text-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-highlight)] border border-[var(--color-text-highlight)] transition-all duration-300 px-6 py-3 rounded-lg font-bold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
