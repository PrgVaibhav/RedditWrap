import React, { useState } from "react";
import { TAGS } from "../../../helper/data/Data";
import { Mailbox, RefreshCcwDot, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useSubreddit } from "../../../context/subredditContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSubreddit } = useSubreddit();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="nav flex items-center justify-between gap-4 px-4 py-3 border-b border-slate-700 relative z-50">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to={"/"}>
            <h1 className="jet text-xl sm:text-2xl font-semibold flex items-center gap-2 whitespace-nowrap">
              <RefreshCcwDot size={20} />
              RedditWrap
            </h1>
          </Link>
        </div>

        {/* Subreddit Dropdown */}
        <div className="flex-1 px-2 ">
          <select
            name="selectedSubreddit"
            defaultValue="Frontend"
            onChange={(e) => setSubreddit(e.target.value)}
            className="w-full sm:w-auto card-color jet px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm sm:text-base"
          >
            {TAGS.map((tag) => (
              <option key={tag.id} value={tag.sub}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>

        {/* Hamburger Icon */}
        <div className="flex-shrink-0 lg:hidden">
          <button
            onClick={toggleMenu}
            className="card-color p-2 rounded-xl border border-slate-700"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          {/* <Link to={"/search"}>
            <button className="card-color py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 transition-all jet flex items-center gap-2">
              <Search />
            </button>
          </Link> */}
          <Link to={"/saved"}>
            <button className="card-color py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 transition-all jet flex items-center gap-2">
              <Mailbox />
              Saved
            </button>
          </Link>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
        } origin-top`}
      >
        <div className="flex flex-col items-start gap-3 px-5 py-4 border-b border-slate-700 card-color">
          <Link to={"/saved"} className="w-full">
            <button
              className="w-full py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 transition-all jet flex items-center gap-3 card-color"
              onClick={toggleMenu}
            >
              <Mailbox />
              Saved
            </button>
          </Link>
          {/* <Link to={"/search"} className="w-full">
            <button
              className="w-full py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 transition-all jet flex items-center gap-3 card-color"
              onClick={toggleMenu}
            >
              <Search />
              Search
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};
