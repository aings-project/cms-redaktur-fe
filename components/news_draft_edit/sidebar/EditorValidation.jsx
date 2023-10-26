import React from "react";
import SecondaryButton from "../../shared/SecondaryButton";
import { useSelector } from "react-redux";

export default function EditorValidation({ onValidate }) {
  const newsDraft = useSelector((state) => state.newsDraftDetail);
  const validationData = newsDraft.validation;
  const isValidated = validationData;

  return (
    <div>
      <div className="mb-6">
        <p className="text-white text-base font-semibold mb-1">Validitas</p>
        {isValidated && (
          <div>
            <p className="text-white text-sm font-normal">
              {validationData.status}
            </p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            <p className="text-white text-sm font-normal mt-2">
              {validationData.description}
            </p>
          </div>
        )}
        {!isValidated && (
          <p className="text-white text-sm font-normal mt-2">
            Periksa validasi draft berita!
          </p>
        )}
      </div>
      <SecondaryButton
        text={isValidated ? "Lihat Rincian" : "Validasi"}
        disabled={false}
        onClick={() => onValidate()}
      />
    </div>
  );
}
