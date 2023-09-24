import React, { useState } from "react";
import Editor from "../shared/Editor";

export default function ValidateModal({ onClose, onValidate }) {
  const [isChecked, setIsChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="bg-white max-w-screen-md w-full flex flex-col rounded-md overflow-y-auto max-h-[75vh]">
          <div className="flex bg-yellow-600 p-4">
            <p className="w-full flex justify-center font-semibold text-xl text-white">
              Konfirmasi Validasi Berita
            </p>
            <button
              onClick={onClose}
              className="font-bold text-sm text-white py-1 px-3 bg-red-600 hover:bg-red-400 rounded-md"
            >
              X
            </button>
          </div>
          <div className="p-6">
            {isChecked && (
              <Editor
                placeholder="**(Opsional)** Masukkan data pendukung..."
                className="border overflow-y-auto bg-white flex-1"
                onChange={(value) => {
                  setText(value);
                }}
              />
            )}
            {!isChecked && (
              <p className="w-full flex justify-center">
                Apakah Anda yakin untuk melakukan validasi otomatis?
              </p>
            )}
            <div className="flex mt-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-4"
              />
              <p className="font-semibold">Tambahkan data pendukung</p>
            </div>
            <div className="mt-6 flex justify-center">
              {isLoading && (
                <p className="mb-4">Sedang Memproses Data. Harap tunggu...</p>
              )}
              {!isLoading && (
                <button
                  onClick={() => {
                    onValidate(text);
                    setIsLoading(true);
                  }}
                  className="bg-zinc-800 py-4 w-1/4 text-white font-semibold rounded-md hover:bg-zinc-600"
                >
                  Validasi
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 z-10 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
