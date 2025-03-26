import React from "react";

const FAQTab = ({ label, isSelected, onClick }) => {
  return (
    <button
      className={`focus-visible:outline-0 flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-spacing24 py-spacing4 px-spacing16 rounded-xl border border-greyscale-5 ${
        isSelected
          ? "shadow-xs bg-white"
          : "shadow-none"
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}
    >
      <h3
        className={`flex-grow text-lg font-semibold text-left ${
          isSelected ? "text-primary-main" : "text-greyscale-2"
        } md:-tracking-0.2 xs:-tracking-0.157`}
      >
        {label}
      </h3>
    </button>
  );
};

export default FAQTab;