export default function ValidationDataModel(response) {
  if (response.length === 0) {
    return null;
  }
  const withData = response[0].validation_type === "with_data";
  const isValid = response[0].result.type === "Valid";
  return {
    type: response[0].validation_type,
    status: response[0].result.type,
    description: withData
      ? isValid
        ? response[0].result.describe.entailed[0]
        : response[0].result.describe.contra[0]
      : response[0].result.describe,
  };
}
