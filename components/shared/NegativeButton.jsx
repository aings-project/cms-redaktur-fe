import React from "react";
import ReactLoading from "react-loading";

export default function NegativeButton({ text, onClick, disabled, isLoading }) {
  return (
    <button
      onClick={isLoading || disabled ? () => {} : onClick}
      className={`h-12 flex items-center justify-center rounded-md border-solid border-2  w-full mb-6 
      ${
        disabled
          ? "hover:cursor-not-allowed bg-gray-500 "
          : "bg-red-600 hover:bg-red-500"
      }`}
    >
      {isLoading && (
        <div className="w-full flex justify-center bg-sky-600 py-2 rounded-md">
          <ReactLoading type="spin" height={24} width={24} />
        </div>
      )}
      {!isLoading && (
        <p
          className={`text-center font-semibold my-auto text-sm ${
            disabled ? "text-white " : "text-white "
          } `}
        >
          {text}
        </p>
      )}
    </button>
  );
}
