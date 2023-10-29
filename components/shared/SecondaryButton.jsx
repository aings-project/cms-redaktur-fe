import React from "react";

export default function SecondaryButton({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 flex items-center justify-center rounded-md border-solid border-2  w-full mb-6 
      ${
        disabled
          ? "hover:cursor-not-allowed bg-gray-700 "
          : "bg-sky-600 hover:bg-sky-500"
      }`}
    >
      <p
        className={`text-center font-semibold my-auto text-sm ${
          disabled ? "text-white " : "text-white "
        } `}
      >
        {text}
      </p>
    </button>
  );
}
