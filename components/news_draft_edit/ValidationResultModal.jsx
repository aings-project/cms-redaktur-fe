import React from "react";
import Editor from "../shared/Editor";

export default function ValidationResult({
  onClose,
  onRevalidate,
  validationData,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20">
        <div className="p-4 bg-white w-1/2 flex flex-col rounded-md overflow-y-auto max-h-screen">
          <div className="flex justify-end">
            <button onClick={onClose} className="font-bold text-xl pb-4">
              Tutup
            </button>
          </div>
          <p className="font-semibold">Hasil Validasi: </p>
          <p>{validationData.type}</p>
          <p className="font-semibold mt-4">Keterangan: </p>
          <p>{validationData.describe}</p>
          <p className="mt-4 font-semibold">Rincian</p>
          <Editor
            placeholder={validationData.final}
            className="bg-neutral-50 rounded-md"
          />

          <div className="mt-6 flex justify-center">
            <button
              onClick={onRevalidate}
              className="bg-zinc-800 py-4 w-1/4 text-white font-semibold rounded-md hover:bg-zinc-600"
            >
              Validasi Ulang
            </button>
          </div>
        </div>
      </div>
      <div className="inset-0 z-10 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
