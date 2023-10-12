import React from "react";

export default function CommentItemFromUser() {
  return (
    <div className="flex justify-end ml-8">
      <div className="bg-yellow-100 rounded-s-2xl rounded-br-xl mt-4 w-fit p-5 max-w-md border-yellow-200 shadow-md">
        <p className="font-semibold">agungdarmono</p>
        <p className="mb-2 text-sm">11 Desember 2021 19:40 WIB</p>
        <p>
          Menurut saya artikel ini terlalu tendensius, mohon diperbaiki. Bagian
          protes tersebut bisa diganti dengan meminta diskusi
        </p>
      </div>
    </div>
  );
}
