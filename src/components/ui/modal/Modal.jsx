import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1e2329] rounded-2xl shadow-xl w-full max-w-2xl mx-auto p-4 sm:p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold z-10 cursor-pointer"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="text-white space-y-4">{children}</div>
      </div>
    </div>
  );
};
