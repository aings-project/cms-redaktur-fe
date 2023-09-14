import React, { useState } from "react";
import Editor from "../shared/Editor";

export default function ValidateModal({ onClose, onValidate }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20">
        <div className="p-4 bg-white w-1/2 h-2/3 flex flex-col rounded-md">
          <div className="flex justify-end">
            <button onClick={onClose} className="font-bold text-xl pb-4">
              Tutup
            </button>
          </div>
          <Editor
            placeholder="**(Opsional)** Masukkan data pendukung..."
            className="border overflow-y-auto bg-white flex-1"
          />
          <div className="mt-6 flex justify-center">
            <button
              onClick={onValidate}
              className="bg-zinc-800 py-4 w-1/4 text-white font-semibold rounded-md hover:bg-zinc-600"
            >
              Validasi
            </button>
          </div>
        </div>
      </div>
      <div className="inset-0 z-10 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
