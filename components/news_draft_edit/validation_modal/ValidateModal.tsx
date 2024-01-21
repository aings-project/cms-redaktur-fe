import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { parseValidationDataInput } from "../../../utils/validationUtils";
import SecondaryButton from "../../shared/SecondaryButton";
import { RootState } from "../../../states";

export default function ValidateModal({ onClose, onValidate, promptWartawan }) {
  const [isChecked, setIsChecked] = useState(false);
  const [what, setWhat] = useInput("");
  const [when, setWhen] = useInput("");
  const [where, setWhere] = useInput("");
  const isLoading : boolean = useSelector((state: RootState) => state.loading);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 mx-4">
        <div className="bg-white max-w-screen-md w-full flex flex-col max-h-[75vh]">
          <div className="flex bg-sky-800 p-4">
            <p className="w-full flex justify-center font-bold text-xl text-white">
              Konfirmasi Validasi Berita
            </p>
            <button
              onClick={onClose}
              className="font-bold text-sm text-white py-1 px-3 bg-red-600 hover:bg-red-400"
            >
              X
            </button>
          </div>
          <div className="pt-6 px-6 overflow-y-auto">
            <p className="w-full flex justify-center mb-4 text-center">
              Apakah Anda yakin untuk melakukan validasi otomatis?
            </p>
            <p className="font-semibold">Data wartawan</p>
            {promptWartawan && <p className="text-sm mb-4">{promptWartawan}</p>}
            {!promptWartawan && <p className="text-sm mb-4">Tidak ada</p>}
            {isChecked && (
              <div>
                <p className="mb-1 font-semibold">Kejadian</p>
                <input
                  disabled={isLoading}
                  className="border-neutral-400 focus:outline-sky-700 border rounded-md py-2 px-2 w-full mb-2"
                  placeholder="Proklamasi Kemerdekaan Republik Indonesia"
                  value={what}
                  onChange={setWhat}
                />
                <p className="mb-1 font-semibold">Tempat</p>
                <input
                  disabled={isLoading}
                  className="border-neutral-400 focus:outline-sky-700 border rounded-md py-2 px-2 w-full mb-2"
                  placeholder="Jalan Pegangsaan Timur no 56 Jakarta"
                  value={where}
                  onChange={setWhere}
                />
                <p className="mb-1 font-semibold">Waktu</p>
                <input
                  disabled={isLoading}
                  className="border-neutral-400 focus:outline-sky-700 border rounded-md py-2 px-2 w-full"
                  placeholder="17 Agustus 1945. Pukul 10.00 WIB"
                  value={when}
                  onChange={setWhen}
                />
              </div>
            )}
            {!isLoading && (
              <div className="flex mt-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="ValidationDataCheckbox mr-4"
                />
                <p className="font-semibold">
                  Tambahkan data pendukung validasi
                </p>
              </div>
            )}

            <div className="mt-4 flex justify-center">
              {isLoading && (
                <div className="flex flex-col justify-center items-center mb-4">
                  <p className="mb-4">Sedang Memproses Data... </p>
                  <ReactLoading
                    type="spin"
                    color="#1e293b"
                    height={24}
                    width={24}
                  />
                </div>
              )}
              {!isLoading && (
                <div className="w-full md:w-1/2 sm:mt-8">
                  <SecondaryButton
                    disabled={false}
                    isLoading={isLoading}
                    text="Validasi"
                    onClick={() => {
                      const information = parseValidationDataInput({
                        what,
                        when,
                        where,
                      });
                      onValidate(information);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 z-30 opacity-40 fixed bg-zinc-800" />
    </>
  );
}
