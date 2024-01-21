import React from "react";

export default function EditorDropdown({
  title,
  items,
  isDisabled,
  value,
  onChange,
}) {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <p className="text-black text-sm mb-2 mr-4">{title}</p>
        <select
          disabled={isDisabled}
          className="text-black text-sm bg-white w-1/2 py-1 hover:cursor-pointer border-2 border-neutral-300 focus:outline-sky-700 rounded-md px-4"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {items.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
