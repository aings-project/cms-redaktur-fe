import React from "react";

export default function NewsDraftEditSidebarMenuDropdown({
  title,
  items,
  isDisabled,
  value,
  onChange,
}) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">{title}</p>
        <select
          disabled={isDisabled}
          className="text-white bg-zinc-800 w-full py-1 hover:cursor-pointer"
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
