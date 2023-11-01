import React from "react";
import SecondaryButton from "../../shared/SecondaryButton";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ValidationAccordion({ onValidate }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const isLoading = useSelector((state) => state.loading);
  const validationData = newsDraft.validation;
  const version = newsDraft.version;
  const maxVersion = newsDraft.maxVersion;
  const isEditable = version === maxVersion;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-black" />}
        sx={{
          backgroundColor: "white",
        }}
      >
        <p className="bg-white px-2 text-black font-semibold">
          Validasi Berita
        </p>
      </AccordionSummary>
      <AccordionDetails className="bg-white">
        <div className="flex flex-col bg-white px-2">
          <div className="mb-6">
            {validationData && (
              <div>
                <p className="text-black text-sm font-semibold mb-2">Status</p>
                <p className="text-black text-sm font-normal">
                  {validationData.status}
                </p>
                <p className="text-black text-sm font-semibold mt-2">
                  Keterangan
                </p>
                <p
                  className={`text-black text-sm font-normal mt-2 ${
                    isEditable ? "line-clamp-2" : ""
                  } `}
                >
                  {validationData.description}
                </p>
              </div>
            )}
            {!validationData && (
              <p className="text-black text-sm font-normal text-center">
                Berita Belum Divalidasi!
              </p>
            )}
          </div>
          {isEditable && (
            <SecondaryButton
              isLoading={isLoading}
              text={validationData ? "Lihat Selengkapnya" : "Validasi Berita"}
              disabled={false}
              onClick={() => onValidate()}
            />
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
