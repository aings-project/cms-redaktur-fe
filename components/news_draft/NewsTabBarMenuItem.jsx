import React from "react";

export default function NewsTabBarMenuItem({ title, isActive, onClick }) {
  return (
    <button className="hover:bg-yellow-600" onClick={onClick}>
      <div className="flex p-4">
        <p
          className={`${
            isActive ? "text-white font-bold" : "text-slate-100 font-normal"
          } text-md`}
        >
          {title}
        </p>
      </div>
      {isActive && <div className="h-1 w-full bg-yellow-100" />}
    </button>
  );
}
