import React, { useEffect, useState } from "react";
import EditorDropdown from "./EditorDropdown";
import EditorInfo from "./EditorInfo";
import SecondaryButton from "../../shared/SecondaryButton";
import { useDispatch, useSelector } from "react-redux";
import { dateTimeFormatter } from "../../../utils/dateTimeFormatter";
import { convertStatus } from "../../../utils/draftAttributeParser";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { asyncReceiveNewsDraftDetail } from "../../../states/news_draft_detail/action";

export default function GeneralInfoAccordion({ onUpdateDraft }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const temp = true;

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

  const handleChangeVersion = (value) => {
    dispatch(
      asyncReceiveNewsDraftDetail({
        draft_id: newsDraft.draft_id,
        version: value,
      })
    );
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
                handleChangeVersion(value);
              }}
              items={numbersArray}
            />
            {temp && <div></div>}
            {isEditable && (
              <div>
                <div className="flex items-center">
                  {["reviewed", "rejected", "published"].includes(status) && (
                    <SecondaryButton
                      text="Sunting Ulang"
                      onClick={() => {
                        onUpdateDraft("reviewing");
                      }}
                    />
                  )}
                  {(status === "reviewing" || status === "new") && (
                    <SecondaryButton
                      text="Simpan Perubahan"
                      onClick={() => {
                        onUpdateDraft("reviewing");
                      }}
                    />
                  )}
                  {(status === "reviewing" || status === "new") && (
                    <SecondaryButton
                      text="Kirim ke Wartawan"
                      onClick={() => {
                        onUpdateDraft("reviewed");
                      }}
                    />
                  )}
                  {status === "approved" && (
                    <SecondaryButton
                      text="Publikasikan"
                      onClick={() => {
                        onUpdateDraft("published");
                      }}
                    />
                  )}
                </div>
                {status !== "rejected" && status !== "published" && (
                  <button
                    className="h-12 flex items-center justify-center rounded-md border-solid border-2 border-red-400 w-full mb-6 bg-red-600"
                    onClick={() => {
                      onUpdateDraft("rejected");
                    }}
                  >
                    <p className="text-center font-semibold my-auto text-white">
                      Tolak Draf Berita
                    </p>
                  </button>
                )}
              </div>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
