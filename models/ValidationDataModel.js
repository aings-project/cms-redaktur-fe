export default function ValidationDataModel(response) {
  if (!response) {
    return null;
  }
  const withData = response.validation_type === "with_data";
  const isValid = response.result.type !== "Invalid";
  return {
    type: response.validation_type,
    status: response.result.type,
    description: withData
      ? isValid
        ? response.result.describe.entailed[0]
        : response.result.describe.contra[0]
      : response.result.describe,
  };
}
