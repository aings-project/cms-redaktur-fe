import React from "react";

export default function MainSidebarMiniMenu({ icon, isSelected, onClick }) {
  return (
    <button
      className={`px-4 py-4 text-white text-base font-semibold w-full ${
        isSelected ? "bg-yellow-600 hover:bg-yellow-700" : "hover:bg-slate-600"
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
