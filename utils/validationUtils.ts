type ValidationInput = {
  what: string,
  when: string,
  where: string,
}

function parseValidationDataInput({ what, when, where }: ValidationInput): string {
  let text: string = "";
  if (what) {
    text = `${text}Kejadian: ${what}. `;
  }
  if (where) {
    text = `${text}Tempat: ${where}. `;
  }
  if (when) {
    return `${text}Waktu: ${when}.`;
  }

  return text;
}

export { parseValidationDataInput };
