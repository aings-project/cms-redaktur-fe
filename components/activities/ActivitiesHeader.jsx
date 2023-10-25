import React from "react";

export default function ActivitiesHeader({ title }) {
  return (
    <div className="flex justify-between flex-wrap">
      <p className="text-black text-3xl sm:text-4xl font-bold min-w-fit mr-6 mb-6 hidden sm:block">
        {title}
      </p>
    </div>
  );
}
