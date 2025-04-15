import React from "react";

export const PostSkeleton = () => {
  return (
    <div className="animate-pulse card-color p-4 rounded shadow-md h-48 flex flex-col justify-between">
      <div>
        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      </div>
      <div className="bg-gray-300 h-24 w-full mt-4 rounded"></div>
    </div>
  );
};
