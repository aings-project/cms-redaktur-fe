import React from "react";

export default function CommentItemFromUser() {
  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col items-end mt-4">
        <div className="bg-yellow-100 rounded-s-2xl rounded-br-xl w-fit p-4 border-yellow-200 shadow-md">
          <p className="font-semibold">agungdarmono</p>
          <p className="text-sm">11 Desember 2021 19:40 WIB</p>
          <p>Perasaan Anda saja</p>
        </div>
      </div>
    </div>
  );
}
