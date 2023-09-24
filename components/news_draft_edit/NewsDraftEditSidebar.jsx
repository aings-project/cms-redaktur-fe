import { AccountCircle } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import NewsDraftEditSidebarMenuDropdown from "./NewsDraftEditSidebarMenuDropdown";
import SecondaryButton from "../shared/SecondaryButton";
import { convertStatus } from "../../utils/draftAttributeParser";

export default function NewsDraftEditSidebar({
  maxVersion,
  status,
  version,
  onSetVersion,
  validationData,
  onValidate,
  auth,
  onUpdateDraft,
}) {
  const [versionTemp, setVersionTemp] = useState("1");
  const numbersArray = Array.from({ length: maxVersion }, (_, index) =>
    (index + 1).toString()
  );
  const isEditable = version === maxVersion;

  useEffect(() => {
    setVersionTemp(version);
  }, [status, version]);

  return (
    <section
      id="newsDraftEditSidebar"
      className="w-full bg-slate-800 p-6 overflow-y-auto "
    >
      <div className="flex mb-6">
        <AccountCircle className="w-16 h-16 text-white" />
        <div className="px-4">
          <p className="text-white text-base font-bold">{auth.username}</p>
          <p className="text-white text-sm font-normal">{auth.email}</p>
        </div>
      </div>
      {isEditable && (
        <div>
          <button
            className="bg-white h-12 flex items-center justify-center rounded-md mb-4 w-full"
            onClick={() => {
              onUpdateDraft("reviewing");
            }}
          >
            <p className="text-center text-zinc-800 font-semibold my-auto">
              {status === "Approved" || status === "reviewed"
                ? "Sunting Ulang"
                : "Simpan Perubahan"}
            </p>
          </button>
          {status === "reviewing" && (
            <SecondaryButton
              text="Selesai Menyunting"
              onClick={() => {
                onUpdateDraft("reviewed");
              }}
            />
          )}
          {(status === "reviewed" || status === "Approved") && (
            <SecondaryButton
              text="Publikasikan"
              disabled={status === "reviewed"}
            />
          )}
        </div>
      )}
      <NewsDraftEditSidebarMenuDropdown
        title="Versi"
        isDisabled={false}
        value={versionTemp}
        onChange={(value) => {
          setVersionTemp(value);
          onSetVersion(value);
        }}
        items={numbersArray}
      />
      <div className="mb-4">
        <p className="text-white text-base font-semibold mb-1">Status</p>
        <p className="text-white">{convertStatus({ value: status })}</p>
      </div>
      {isEditable && (
        <div>
          <NewsDraftEditSidebarMenuDropdown
            title="Kategori"
            isDisabled={status !== "reviewing"}
            value={"Belum Ada Kategori"}
            onChange={() => {}}
            items={["Belum Ada Kategori"]}
          />
        </div>
      )}
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
        text={validationData ? "Lihat Rincian" : "Validasi"}
        disabled={false}
        onClick={() => onValidate()}
      />
      {isEditable && (
        <button className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6 hover:cursor-not-allowed bg-slate-800">
          <p className="text-center font-semibold my-auto text-red-400">
            Tolak Berita
          </p>
        </button>
      )}
    </section>
  );
}
