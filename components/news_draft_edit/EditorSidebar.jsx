import { AccountCircle, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EditorDropdown from "./EditorDropdown";
import SecondaryButton from "../shared/SecondaryButton";
import { convertStatus } from "../../utils/draftAttributeParser";
import EditorInfo from "./EditorInfo";
import EditorValidation from "./EditorValidation";
import useRequireAuth from "../../hooks/useRequireAuth";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

export default function EditorSidebar({ onValidate, onUpdateDraft }) {
  const router = useRouter();
  const auth = useRequireAuth();
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const updatedAt = dateTimeFormatter(newsDraft.draft_berita.created_at);
  const journalist = newsDraft.draft_berita.user_wartawan.username;
  const editor = newsDraft.draft_berita.user_redaktur.username;
  const status = newsDraft.draft_berita.status;
  const version = newsDraft.draft_berita.version;
  const maxVersion = newsDraft.total_version;
  const isEditable = version === maxVersion;

  const [versionTemp, setVersionTemp] = useState("1");
  const numbersArray = Array.from({ length: maxVersion }, (_, index) =>
    (index + 1).toString()
  );
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

      <EditorInfo title="Diperbarui" content={updatedAt} />
      <EditorInfo title="Wartawan" content={journalist} />
      {version !== 1 && <EditorInfo title="Diredaksi Oleh" content={editor} />}
      <EditorInfo title="Status" content={convertStatus({ value: status })} />
      <EditorValidation onValidate={onValidate} />
      <EditorDropdown
        title="Versi"
        isDisabled={false}
        value={versionTemp}
        onChange={(value) => {
          setVersionTemp(value);
          router.push(
            `/news_draft/edit/${newsDraft.draft_berita.draft_id}/${value}`
          );
        }}
        items={numbersArray}
      />

      {isEditable && (
        <div>
          <EditorDropdown
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
        onClick={() => {
          router.push(
            `/comments/${newsDraft.draft_berita.draft_id}/${version}/${newsDraft.draft_berita.id}`
          );
        }}
      >
        <EditorInfo title="Komentar" content="Lihat Komentar" />
        <KeyboardArrowRight className="text-white" />
      </button>
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