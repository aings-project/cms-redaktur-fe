function parseValidationDataInput({ what, when, where }) {
  let text = "";
  if (what) {
    text = `${text}Kejadian: ${what}. `;
  }
  if (where) {
    text = `${text}Tempat: ${where}. `;
  }
  if (when) {
    text = `${text}Waktu: ${when}.`;
  }

  return text;
}

export { parseValidationDataInput };
