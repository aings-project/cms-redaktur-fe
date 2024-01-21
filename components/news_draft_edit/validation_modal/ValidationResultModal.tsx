import React from "react";
import SecondaryButton from "../../shared/SecondaryButton";

export default function ValidationResult({
  onClose,
  onRevalidate,
  validationData,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 mx-4">
        <div className="bg-white max-w-screen-md w-full flex flex-col overflow-y-auto max-h-[75vh]">
          <div className="flex bg-sky-800 p-4">
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
          <div className="pt-6 px-6">
            <p className="font-semibold">Hasil Validasi: </p>
            <p>{validationData.result.type}</p>
            <p className="font-semibold mt-4">Keterangan: </p>
            <p>{validationData.result.describe}</p>

            <div className="mt-6 flex justify-center">
              <div className="w-full md:w-1/2">
                <SecondaryButton isLoading={false} disabled={false} text="Validasi Ulang" onClick={onRevalidate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 z-30 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
