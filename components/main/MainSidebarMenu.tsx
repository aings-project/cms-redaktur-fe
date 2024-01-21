import React from "react";

export default function MainSidebarMenu({ text, icon, isSelected, onClick }) {
  return (
    <button
      className={`flex text-white text-base font-semibold w-full ${
        isSelected ? "bg-gray-600" : "hover:bg-slate-600"
      }`}
      onClick={onClick}
    >
      <div
        className={`p-1 ${
          isSelected ? "bg-blue-400" : "bg-transparent"
        }  h-full`}
      />
      <div className="flex px-4 py-4">
        {icon}
        <p className="text-white text-base font-normal ml-4 hidden md:block">
          {text}
        </p>
      </div>
    </button>
  );
}
