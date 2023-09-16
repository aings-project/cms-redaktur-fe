import React from "react";

export default function NewsTabBarMenuItem({ title, isActive }) {
  return (
    <div className="hover:bg-yellow-600">
      <div className="flex p-4">
        <div
          className={`${
            isActive ? "bg-yellow-700" : "bg-neutral-600"
          } py-1 px-2 rounded-md mr-4`}
        >
          <p className="text-white text-sm font-bold">12</p>
        </div>
        <p
          className={`${
            isActive ? "text-white font-bold" : "text-yellow-50 font-semibold"
          } text-base`}
        >
          {title}
        </p>
      </div>
      {isActive && <div className="h-1 w-full bg-black" />}
    </div>
  );
}
