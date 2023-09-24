import React from "react";

export default function MainSidebarMenu({ text, icon, isSelected, onClick }) {
  return (
    <button
      className={`flex px-4 py-4 text-white text-base font-semibold w-full ${
        isSelected ? "bg-yellow-600 hover:bg-yellow-700" : "hover:bg-slate-600"
      }`}
      onClick={onClick}
    >
      {icon}
      <p className="text-white text-base font-normal ml-4 hidden md:block">
        {text}
      </p>
    </button>
  );
}
