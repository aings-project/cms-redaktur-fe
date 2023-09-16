import React, { useState } from "react";
import Editor from "../shared/Editor";

export default function ValidateModal({ onClose, onValidate }) {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20">
        <div className="p-4 bg-white w-1/2 flex flex-col rounded-md overflow-y-auto max-h-screen">
          <div className="flex justify-end">
            <button onClick={onClose} className="font-bold text-xl pb-4">
              Tutup
            </button>
          </div>
          <div>
            <div className="flex mb-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-4"
              />
              <p className="font-semibold">Tambahkan data pendukung</p>
            </div>
            {isChecked && (
              <Editor
                placeholder="**(Opsional)** Masukkan data pendukung..."
                className="border overflow-y-auto bg-white flex-1"
                onChange={(value) => {
                  setText(value);
                  console.log(text);
                }}
              />
            )}
          </div>
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
