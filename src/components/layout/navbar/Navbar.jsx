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
      <nav className="nav flex items-center justify-between p-5 border-b border-slate-700 relative z-50">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <h1 className="jet text-xl sm:text-3xl font-semibold flex items-center gap-3">
              <RefreshCcwDot />
              ReddiSync
            </h1>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center space-x-7">
          {TAGS.map((tag) => (
            <li
              key={tag.id}
              className="card-color py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet"
              onClick={() => setSubreddit(tag.sub)}
            >
              {tag.name}
            </li>
          ))}
        </ul>

        <div className="flex space-x-5">
          <Link to={"/search"}>
            <button className="hidden lg:flex card-color py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet items-center gap-3">
              <Search />
            </button>
          </Link>

          {/* Desktop Saved Button */}
          <Link to={"/saved"}>
            <button className="hidden lg:flex card-color py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet items-center gap-3">
              <Mailbox />
              Saved
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="card-color p-2 rounded-xl border border-slate-700"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
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
          {TAGS.map((tag) => (
            <div
              key={tag.id}
              className="w-full py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet"
              onClick={toggleMenu}
            >
              {tag.name}
            </div>
          ))}
          <Link to={"/saved"} className="w-full">
            <button
              className="w-full mt-2 py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet flex items-center gap-3 card-color"
              onClick={toggleMenu}
            >
              <Mailbox />
              Saved
            </button>
          </Link>
          <Link to={"/search"} className="w-full">
            <button
              className="w-full mt-2 py-2 px-4 rounded-xl border border-slate-700 cursor-pointer active:scale-95 duration-300 transition-all jet flex items-center gap-3 card-color"
              onClick={toggleMenu}
            >
              <Search />
              Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
