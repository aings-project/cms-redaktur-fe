import { AccountCircle } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import NewsDraftEditSidebarMenuDropdown from "./NewsDraftEditSidebarMenuDropdown";
import SecondaryButton from "../shared/SecondaryButton";

export default function NewsDraftEditSidebar({
  markdown,
  onValidate,
  isValidated,
  isValid,
  status,
  onSetStatus,
}) {
  const [statusTemp, setStatusTemp] = useState("");

  useEffect(() => {
    setStatusTemp(status);
  }, [status]);

  return (
    <div className="max-w-xs w-full h-screen bg-zinc-800 p-6 overflow-y-auto">
      <div className="flex mb-6">
        <AccountCircle className="w-16 h-16 text-white" />
        <div className="px-4">
          <p className="text-white text-base font-bold">Muhammad Paidi</p>
          <p className="text-white text-sm font-normal">paidi@aings.com</p>
        </div>
      </div>
      <button
        className="bg-white h-12 flex items-center justify-center rounded-md mb-4 w-full"
        onClick={() => {
          console.log(markdown);
          if (
            status === "Disetujui" ||
            status === "Menunggu Konfirmasi Wartawan"
          ) {
            onSetStatus("Reviewing");
          } else {
            onSetStatus("Menunggu Konfirmasi Wartawan");
          }
        }}
      >
        <p className="text-center text-zinc-800 font-semibold my-auto">
          {status === "Disetujui" || status === "Menunggu Konfirmasi Wartawan"
            ? "Sunting"
            : "Simpan Perubahan"}
        </p>
      </button>
      {(status === "Menunggu Konfirmasi Wartawan" ||
        status === "Disetujui") && (
        <SecondaryButton
          text="Publikasikan"
          disabled={status === "Menunggu Konfirmasi Wartawan"}
        />
      )}

      <NewsDraftEditSidebarMenuDropdown
        title="Versi"
        isDisabled={status !== "Reviewing"}
        value="0"
        onChange={() => {}}
        items={["0"]}
      />
      <NewsDraftEditSidebarMenuDropdown
        title="Status"
        isDisabled={status !== "Reviewing"}
        value={statusTemp}
        onChange={(value) => setStatusTemp(value)}
        items={["New", "Reviewing", "Reviewed"]}
      />
      <NewsDraftEditSidebarMenuDropdown
        title="Kategori"
        isDisabled={status !== "Reviewing"}
        value={"Belum Ada Kategori"}
        onChange={() => {}}
        items={["Belum Ada Kategori"]}
      />
      <div className="w-full h-[0.25px] bg-white mb-4" />
      <div className="mb-6">
        <p className="text-white text-base font-semibold mb-1">Validitas</p>
        {isValidated && (
          <div>
            <p className="text-white text-sm font-normal">Berita Tidak Valid</p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            <p className="text-white text-sm font-normal mt-2">
              Lokasi tidak sesuai. Banyak kalimat yang rancu.
            </p>
          </div>
        )}
        {!isValidated && (
          <p className="text-white text-sm font-normal mt-2">
            Berita belum divalidasi otomatis!
          </p>
        )}
      </div>
      <SecondaryButton
        text={isValid ? "Validasi Ulang" : "Validasi"}
        disabled={false}
        onClick={() => onValidate()}
      />
      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6">
        <p className="text-center font-semibold my-auto text-red-400">Hapus</p>
      </button>
    </div>
  );
}
