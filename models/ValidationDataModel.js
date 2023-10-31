export default function ValidationDataModel(response) {
  if (!response) {
    return null;
  }
  return {
    type: response.validation_type,
    status: response.result.type,
    description: response.result.describe,
  };
}
