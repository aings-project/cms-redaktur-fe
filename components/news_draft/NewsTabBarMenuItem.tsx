import React from "react";

export default function NewsTabBarMenuItem({ title, isActive, onClick }) {
  return (
    <button className="group hover:font-bold min-w-fit" onClick={onClick}>
      <div className="flex p-4">
        <p
          className={`${
            isActive
              ? "text-sky-800 font-bold"
              : "text-neutral-500 group-hover:text-sky-700 font-semibold"
          } text-md`}
        >
          {title}
        </p>
      </div>
      {isActive && <div className="h-1 w-full bg-sky-800" />}
      {!isActive && <div className="h-1 w-full group-hover:bg-sky-500" />}
    </button>
  );
}
