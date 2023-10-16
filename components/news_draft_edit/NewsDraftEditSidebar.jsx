import { AccountCircle, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EditSidebarDropdown from "./EditSidebarDropdown";
import SecondaryButton from "../shared/SecondaryButton";
import { convertStatus } from "../../utils/draftAttributeParser";
import EditSidebarInfo from "./EditSidebarInfo";

export default function NewsDraftEditSidebar({
  maxVersion,
  status,
  version,
  onSetVersion,
  validationData,
  onValidate,
  auth,
  onUpdateDraft,
  updatedAt,
  journalist,
  editor,
  onNavigateComment,
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
            className="bg-white h-12 flex items-center justify-center rounded-md mb-4 w-full text-sm"
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

      <EditSidebarInfo title="Diperbarui" content={updatedAt} />
      <EditSidebarInfo title="Wartawan" content={journalist} />
      {version !== 1 && (
        <EditSidebarInfo title="Diredaksi Oleh" content={editor} />
      )}
      <EditSidebarInfo
        title="Status"
        content={convertStatus({ value: status })}
      />
      <EditSidebarDropdown
        title="Versi"
        isDisabled={false}
        value={versionTemp}
        onChange={(value) => {
          setVersionTemp(value);
          onSetVersion(value);
        }}
        items={numbersArray}
      />

      {isEditable && (
        <div>
          <EditSidebarDropdown
            title="Kategori"
            isDisabled={status !== "reviewing"}
            value={"Belum Ada Kategori"}
            onChange={() => {}}
            items={["Belum Ada Kategori"]}
          />
        </div>
      )}
      <button
        className="flex w-full justify-between items-center"
        onClick={onNavigateComment}
      >
        <EditSidebarInfo title="Komentar" content="2 Komentar" />
        <KeyboardArrowRight className="text-white" />
      </button>
      <div className="mb-6">
        <p className="text-white text-base font-semibold mb-1">Validitas</p>
        {validationData.length > 0 && (
          <div>
            <p className="text-white text-sm font-normal">
              {validationData[0].result.type}
            </p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            {validationData[0].with_data && (
              <p className="text-white text-sm font-normal mt-2">
                {validationData[0].result.describe.entailed}
              </p>
            )}
            {!validationData[0].with_data && (
              <p className="text-white text-sm font-normal mt-2">
                {validationData[0].result.describe}
              </p>
            )}
          </div>
        )}
        {validationData.length === 0 && (
          <p className="text-white text-sm font-normal mt-2">
            Periksa validasi draft berita!
          </p>
        )}
      </div>
      <SecondaryButton
        text={validationData.length > 0 ? "Lihat Rincian" : "Validasi"}
        disabled={false}
        onClick={() => onValidate()}
      />
      <div className="w-full h-[0.25px] bg-white mb-4" />
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
