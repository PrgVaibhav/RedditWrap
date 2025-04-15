import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full nav text-zinc-300 py-6  border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          <span className="font-semibold text-white">RedditWrap</span> ©{" "}
          {new Date().getFullYear()} – Curated for devs & learners.
        </div>

        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/saved" className="hover:text-white transition">
            Saved
          </Link>
          <a
            href="https://github.com/PrgVaibhav/RedditWrap"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://kumarvaibhav.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};
