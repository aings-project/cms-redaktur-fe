import React from "react";
import SecondaryButton from "../../shared/SecondaryButton";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ValidationAccordion({ onValidate }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const validationData = newsDraft.validation;
  const isValidated = validationData;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-white" />}
        sx={{
          backgroundColor: "#374151",
        }}
      >
        <p className="bg-gray-700 text-white font-semibold">Validasi</p>
      </AccordionSummary>
      <AccordionDetails className="bg-gray-700">
        <div className="flex flex-col bg-gray-700">
          <div className="mb-6">
            {isValidated && (
              <div>
                <p className="text-white text-sm font-normal">
                  {validationData.status}
                </p>
                <p className="text-white text-sm font-semibold mt-2">Alasan</p>
                <p className="text-white text-sm font-normal mt-2 line-clamp-2">
                  {validationData.description}
                </p>
              </div>
            )}
            {!isValidated && (
              <p className="text-white text-sm font-normal text-center">
                Berita Belum Divalidasi!
              </p>
            )}
          </div>
          <SecondaryButton
            text={isValidated ? "Lihat Selengkapnya" : "Validasi Berita"}
            disabled={false}
            onClick={() => onValidate()}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
