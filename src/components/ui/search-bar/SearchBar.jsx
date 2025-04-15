import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex gap-3 items-center  border border-slate-700 max-w-full sm:max-w-[30vw] rounded-xl shadow-lg">
      <div className="border-r border-slate-700 w-max h-max p-3">
        <p className="jet font-semibold text-gray-300 text-sm sm:text-lg">
          Subreddit
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search your favorite"
          className="p-2 outline-none text-sm sm:text-lg"
        />
      </div>
    </div>
  );
};
