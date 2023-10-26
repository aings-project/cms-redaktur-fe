import React, { useEffect, useState } from "react";
import EditorDropdown from "./EditorDropdown";
import EditorInfo from "./EditorInfo";
import EditorValidation from "./EditorValidation";
import SecondaryButton from "../../shared/SecondaryButton";
import { useSelector } from "react-redux";
import dateTimeFormatter from "../../../utils/dateTimeFormatter";
import { convertStatus } from "../../../utils/draftAttributeParser";

export default function EditorSidebarTab({ onValidate, onUpdateDraft }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const updatedAt = dateTimeFormatter(newsDraft.dateTime);
  const journalist = newsDraft.wartawan;
  const editor = newsDraft.editor;
  const status = newsDraft.status;
  const version = newsDraft.version;
  const maxVersion = newsDraft.maxVersion;
  const isEditable = version === maxVersion;

  const [versionTemp, setVersionTemp] = useState("1");
  const numbersArray = Array.from({ length: maxVersion }, (_, index) =>
    (index + 1).toString()
  );
  useEffect(() => {
    setVersionTemp(version);
  }, [status, version]);

  return (
    <div className="px-6">
      <EditorInfo title="Diperbarui" content={updatedAt} />
      <EditorInfo title="Wartawan" content={journalist} />
      {version !== 1 && <EditorInfo title="Diredaksi Oleh" content={editor} />}
      <EditorInfo title="Status" content={convertStatus({ value: status })} />
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
      <EditorValidation onValidate={onValidate} />
      <EditorDropdown
        title="Versi"
        isDisabled={false}
        value={versionTemp}
        onChange={(value) => {
          setVersionTemp(value);
          router.push(`/news_draft/edit/${newsDraft.draft_id}/${value}`);
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
      {isEditable && (
        <button
          className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6 bg-slate-800"
          onClick={() => {
            onUpdateDraft("rejected");
          }}
        >
          <p className="text-center font-semibold my-auto text-red-400">
            Tolak Berita
          </p>
        </button>
      )}
    </div>
  );
}
