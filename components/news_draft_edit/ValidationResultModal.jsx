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
        <div className="bg-white max-w-screen-lg w-full flex flex-col rounded-md overflow-y-auto max-h-[75vh]">
          <div className="flex bg-yellow-600 p-4">
            <p className="w-full flex justify-center font-semibold text-xl text-white">
              Hasil Validasi Berita
            </p>
            <button
              onClick={onClose}
              className="font-bold text-sm text-white py-1 px-3 bg-red-600 hover:bg-red-400 rounded-md"
            >
              X
            </button>
          </div>
          <div className="p-6">
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
      </div>
      <div className="inset-0 z-10 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
