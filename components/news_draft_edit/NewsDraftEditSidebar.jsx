import { AccountCircle } from "@mui/icons-material";
import React, { useState } from "react";
import NewsDraftEditSidebarMenuDropdown from "./NewsDraftEditSidebarMenuDropdown";
import SecondaryButton from "../shared/SecondaryButton";

export default function NewsDraftEditSidebar({ markdown, onValidate }) {
  const status = "Menunggu Konfirmasi Wartawan";
  const [validStatus, setValidStatus] = useState(false);

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
        onClick={() => console.log(markdown)}
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
        isDisabled={false}
        initialValue="0 (11-10-2020 15:44)"
        items={["0 (11-10-2020 15:44)", "1 (11-10-2020 19:44)"]}
      />
      <NewsDraftEditSidebarMenuDropdown
        title="Status"
        isDisabled={false}
        initialValue="Menunggu Konfirmasi Wartawan"
        items={[
          "Sedang Disunting",
          "Menunggu Konfirmasi Wartawan",
          "Ditolak",
          "Disetujui",
        ]}
      />
      <NewsDraftEditSidebarMenuDropdown
        title="Kategori"
        isDisabled={false}
        initialValue="Politik"
        items={["Olahraga", "Politik", "Fenomena Alam", "Belum Ada Kategori"]}
      />
      <div className="w-full h-[0.25px] bg-white mb-4" />
      <div className="mb-6">
        <p className="text-white text-base font-semibold mb-1">Validitas</p>
        {validStatus && (
          <div>
            <p className="text-white text-sm font-normal">Berita Tidak Valid</p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            <p className="text-white text-sm font-normal mt-2">
              Lokasi tidak sesuai. Banyak kalimat yang rancu.
            </p>
          </div>
        )}
        {!validStatus && (
          <p className="text-white text-sm font-normal mt-2">
            Berita belum divalidasi otomatis!
          </p>
        )}
      </div>
      <SecondaryButton
        text={validStatus ? "Validasi Ulang" : "Validasi"}
        disabled={false}
        onClick={() => onValidate()}
      />
      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6">
        <p className="text-center font-semibold my-auto text-red-400">Hapus</p>
      </button>
    </div>
  );
}
