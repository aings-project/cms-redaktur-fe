import React from "react";

export default function SecondaryButton({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 flex items-center justify-center rounded-md border-solid border-2  w-full mb-6 
      ${
        disabled ? "hover:cursor-not-allowed border-zinc-400 " : "border-white"
      }`}
    >
      <p
        className={`text-center font-semibold my-auto ${
          disabled ? "text-zinc-400 " : "text-white"
        } `}
      >
        {text}
      </p>
    </button>
  );
}
