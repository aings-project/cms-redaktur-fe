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
import useInput from "../../../hooks/useInput";
import { asyncPostCommentList } from "../../../states/comments/action";
import useRequireAuth from "../../../hooks/useRequireAuth";
import NegativeButton from "../../shared/NegativeButton";
import ReactLoading from "react-loading";

export default function GeneralInfoAccordion({ onUpdateDraft }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const auth = useRequireAuth();

  const updatedAt = dateTimeFormatter(newsDraft.dateTime);
  const journalist = newsDraft.wartawan;
  const editor = newsDraft.editor;
  const status = newsDraft.status;
  const version = newsDraft.version;
  const maxVersion = newsDraft.maxVersion;
  const isEditable = version === maxVersion;
  const isRejectable = !["rejected", "published", "reviewed"].includes(status);

  const [versionTemp, setVersionTemp] = useState("1");
  const [rejection, setRejection] = useInput("");
  const numbersArray = Array.from({ length: maxVersion }, (_, index) =>
    (index + 1).toString()
  );
  const [isExpanded, setIsExpanded] = useState(true);
  const [isReturned, setIsReturned] = useState(false);

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

  const handleRejectButton = () => {
    if (isReturned) {
      dispatch(
        asyncPostCommentList({
          content: rejection,
          id_redaktur: auth.id,
          id: newsDraft.id,
        })
      );
      onUpdateDraft("rejected");
      setIsReturned(false);
      return;
    }
    setIsReturned(true);
  };

  useEffect(() => {
    setVersionTemp(version);
  }, [status, version]);

  return (
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
        <p className="px-2 bg-white text-black font-semibold">Informasi Umum</p>
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
          {isEditable && !isLoading && (
            <div>
              {!isReturned && (
                <div className="flex items-center">
                  {["rejected", "published"].includes(status) && (
                    <SecondaryButton
                      disabled={isLoading}
                      text="Kembalikan Ke Draf"
                      onClick={() => {
                        onUpdateDraft("reviewing");
                      }}
                    />
                  )}
                  {["reviewing", "new"].includes(status) && (
                    <SecondaryButton
                      disabled={isLoading}
                      text="Simpan Perubahan"
                      onClick={() => {
                        onUpdateDraft("reviewing");
                      }}
                    />
                  )}
                  {["reviewing", "new"].includes(status) && (
                    <SecondaryButton
                      disabled={isLoading}
                      text="Kembalikan Wartawan"
                      onClick={() => {
                        onUpdateDraft("reviewed");
                      }}
                    />
                  )}
                </div>
              )}
              {!isReturned && ["reviewing", "new"].includes(status) && (
                <SecondaryButton
                  disabled={isLoading}
                  text="Publikasikan"
                  onClick={() => {
                    onUpdateDraft("published");
                  }}
                />
              )}
              {isReturned && (
                <textarea
                  value={rejection}
                  onChange={setRejection}
                  className="border w-full p-2 focus:outline-sky-600"
                  placeholder="Berikan alasan..."
                />
              )}
              {isRejectable && (
                <div className="w-full flex">
                  {isReturned && (
                    <SecondaryButton
                      disabled={isLoading}
                      text="Urungkan Tolak"
                      onClick={() => {
                        setIsReturned(false);
                      }}
                    />
                  )}
                  <NegativeButton
                    text="Tolak Draf Berita"
                    disabled={(isReturned && rejection.length < 1) || isLoading}
                    onClick={handleRejectButton}
                  />
                </div>
              )}
            </div>
          )}
          {isLoading && (
            <div className="w-full flex justify-center">
              <ReactLoading
                type="bubbles"
                color="#0369a1"
                height={48}
                width={48}
              />
            </div>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
