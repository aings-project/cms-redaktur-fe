import React, { useState } from "react";

export default function NewsDraftEditSidebarMenuDropdown({
  title,
  items,
  initialValue,
  isDisabled,
}) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">{title}</p>
        <select
          disabled={isDisabled}
          className="text-white bg-zinc-800 w-full py-1 hover:cursor-pointer"
          defaultValue={initialValue}
        >
          {items.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
