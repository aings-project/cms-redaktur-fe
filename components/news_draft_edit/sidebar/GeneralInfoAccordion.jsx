import React, { useEffect, useState } from "react";
import EditorDropdown from "./EditorDropdown";
import EditorInfo from "./EditorInfo";
import SecondaryButton from "../../shared/SecondaryButton";
import { useSelector } from "react-redux";
import { dateTimeFormatter } from "../../../utils/dateTimeFormatter";
import { convertStatus } from "../../../utils/draftAttributeParser";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

export default function GeneralInfoAccordion({ onUpdateDraft }) {
  const router = useRouter();
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
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpanded = (value) => {
    setIsExpanded(value);
  };
  useEffect(() => {
    setVersionTemp(version);
  }, [status, version]);

  return (
    <div>
      <Accordion
        expanded={isExpanded}
        onChange={() => {
          handleExpanded(!isExpanded);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-black" />}
          sx={{
            backgroundColor: "white",
          }}
        >
          <p className="px-2 bg-white text-black font-semibold">
            Informasi Umum
          </p>
        </AccordionSummary>
        <AccordionDetails className="bg-white">
          <div className="flex flex-col bg-white px-2">
            <EditorInfo title="Diperbarui" content={updatedAt} />
            <EditorInfo title="Wartawan" content={journalist} />
            {version !== 1 && (
              <EditorInfo title="Diredaksi Oleh" content={editor} />
            )}
            <EditorInfo
              title="Status"
              content={convertStatus({ value: status })}
            />
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
              <div>
                <button
                  className="bg-sky-600 h-12 flex items-center justify-center rounded-md mb-4 w-full text-sm"
                  onClick={() => {
                    onUpdateDraft("reviewing");
                  }}
                >
                  <p className="text-center text-white font-semibold my-auto">
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
            {isEditable && (
              <button
                className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6 bg-red-600"
                onClick={() => {
                  onUpdateDraft("rejected");
                }}
              >
                <p className="text-center font-semibold my-auto text-white">
                  Tolak Berita
                </p>
              </button>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
