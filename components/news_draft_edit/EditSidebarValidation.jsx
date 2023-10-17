import React from "react";
import SecondaryButton from "../shared/SecondaryButton";

export default function EditSidebarValidation({ validationData, onValidate }) {
  const isValidated = validationData.length > 0;

  const withData = isValidated
    ? validationData[0].validation_type === "with_data"
    : false;
  const isValid = isValidated
    ? validationData[0].result.type === "Valid"
    : false;
  const description = isValidated ? validationData[0].result.describe : "";

  return (
    <div>
      <div className="mb-6">
        <p className="text-white text-base font-semibold mb-1">Validitas</p>
        {isValidated && (
          <div>
            <p className="text-white text-sm font-normal">
              {validationData[0].result.type}
            </p>
            <p className="text-white text-sm font-semibold mt-2">Alasan</p>
            {withData && (
              <div>
                {!isValid && (
                  <p className="text-white text-sm font-normal mt-2">
                    {description.contra[0]}
                  </p>
                )}
                {isValid && (
                  <p className="text-white text-sm font-normal mt-2">
                    {description.entailed[0]}
                  </p>
                )}
              </div>
            )}
            {!withData && (
              <p className="text-white text-sm font-normal mt-2">
                {description}
              </p>
            )}
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
