import { AccountCircle, ArrowDropDown, ArrowRight } from "@mui/icons-material";
import React from "react";

export default function NewsDraftEditSidebar({ markdown }) {
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
          Simpan Perubahan
        </p>
      </button>
      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-slate-400 w-full mb-6 hover:cursor-default">
        <p className="text-center text-slate-400 font-semibold my-auto">
          Publikasikan
        </p>
      </button>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">Versi</p>
        <button className="flex justify-between w-full">
          <p className="text-white text-sm font-normal">0 (07/09/2023 11:40)</p>
          <ArrowDropDown className="text-white" />
        </button>
      </div>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">Status</p>
        <button className="flex justify-between w-full">
          <p className="text-white text-sm font-normal">Disunting</p>
          <ArrowDropDown className="text-white" />
        </button>
      </div>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">Kategori</p>
        <button className="flex justify-between w-full">
          <p className="text-white text-sm font-normal">Politik</p>
          <ArrowDropDown className="text-white" />
        </button>
      </div>
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">Komentar</p>
        <button className="flex justify-between w-full">
          <p className="text-white text-sm font-normal">12 Komentar</p>
          <ArrowRight className="text-white" />
        </button>
      </div>
      <div className="w-full h-[0.25px] bg-white mb-4" />
      <div className="mb-6">
        <button className="flex w-full justify-between">
          <p className="text-white text-base font-semibold mb-1">Validitas</p>
          <p className="text-white text-sm font-semibold">50%</p>
        </button>
        <p className="text-white text-sm font-normal">Berita Tidak Valid</p>
        <div className="flex mt-4">
          <div className="w-1/2 bg-white h-1" />
          <div className="w-1/2 bg-slate-400 h-1" />
        </div>
        <p className="text-white text-sm font-semibold mt-2">Alasan</p>
        <p className="text-white text-sm font-normal mt-2">
          Lokasi tidak sesuai. Banyak kalimat yang rancu.
        </p>
      </div>

      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-white w-full mb-4">
        <p className="text-center text-white font-semibold my-auto">
          Validasi Ulang
        </p>
      </button>
      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6">
        <p className="text-center font-semibold my-auto text-red-400">Hapus</p>
      </button>
    </div>
  );
}
