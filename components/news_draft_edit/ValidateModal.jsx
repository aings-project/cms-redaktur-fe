import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

export default function ValidateModal({ onClose, onValidate, promptWartawan }) {
  const [isChecked, setIsChecked] = useState(false);
  const [text, onTextChange] = useInput("");
  const isLoading = useSelector((state) => state.loading);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="bg-white max-w-screen-md w-full flex flex-col rounded-md overflow-y-auto max-h-[75vh]">
          <div className="flex bg-slate-600 p-4">
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
              <div>
                <p className="font-semibold">Data yang digunakan wartawan: </p>
                {promptWartawan && (
                  <p className="font-normal mb-4">{promptWartawan}</p>
                )}
                {!promptWartawan && (
                  <p className="font-normal mb-4">Tidak ada</p>
                )}
                <input
                  className="border-neutral-400 border-2 rounded-sm py-2 px-2 w-full"
                  placeholder="Masukkan data tambahan (jika ada)"
                  onChange={onTextChange}
                />
              </div>
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
              <p className="font-semibold">Tambahkan data pendukung validasi</p>
            </div>
            <div className="mt-6 flex justify-center">
              {isLoading && (
                <div className="flex">
                  <p className="mb-4">
                    Sedang Memproses Data. Harap tunggu...{" "}
                  </p>
                  <ReactLoading
                    type="spin"
                    color="#1e293b"
                    height={24}
                    width={24}
                  />
                </div>
              )}
              {!isLoading && (
                <button
                  onClick={() => {
                    onValidate(text);
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
      <div className="inset-0 z-20 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
