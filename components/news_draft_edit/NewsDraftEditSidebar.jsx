import { AccountCircle } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import NewsDraftEditSidebarMenuDropdown from "./NewsDraftEditSidebarMenuDropdown";
import SecondaryButton from "../shared/SecondaryButton";

export default function NewsDraftEditSidebar({
  markdown,
  onValidate,
  status,
  onSetStatus,
  maxVersion,
  version,
  onSetVersion,
  validationData,
}) {
  const [statusTemp, setStatusTemp] = useState("");
  const [versionTemp, setVersionTemp] = useState("1");
  const numbersArray = Array.from({ length: maxVersion }, (_, index) =>
    (index + 1).toString()
  );

  useEffect(() => {
    setStatusTemp(status);
    setVersionTemp(version);
  }, [status, version]);

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
          onSetStatus(statusTemp);
        }}
      >
        <p className="text-center text-zinc-800 font-semibold my-auto">
          {status === "Approved" || status === "Reviewed"
            ? "Sunting"
            : "Simpan Perubahan"}
        </p>
      </button>
      {(status === "Reviewed" || status === "Approved") && (
        <SecondaryButton text="Publikasikan" disabled={status === "Reviewed"} />
      )}

      <NewsDraftEditSidebarMenuDropdown
        title="Versi"
        isDisabled={status !== "Reviewing"}
        value={versionTemp}
        onChange={(value) => {
          setVersionTemp(value);
          onSetVersion(value);
        }}
        items={numbersArray}
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
        {validationData && (
          <div>
            <p className="text-white text-sm font-normal">
              {validationData.type}
            </p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            <p className="text-white text-sm font-normal mt-2">
              {validationData.describe}
            </p>
          </div>
        )}
        {!validationData && (
          <p className="text-white text-sm font-normal mt-2">
            Periksa validasi draft berita!
          </p>
        )}
      </div>
      <SecondaryButton
        text="Cek Validasi"
        disabled={false}
        onClick={() => onValidate()}
      />
      <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6">
        <p className="text-center font-semibold my-auto text-red-400">Hapus</p>
      </button>
    </div>
  );
}
