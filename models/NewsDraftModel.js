import ValidationDataModel from "./ValidationDataModel";

export default function NewsDraftModels(response) {
  return {
    title: response.draft_berita.title,
    content: response.draft_berita.content,
    id: response.draft_berita.id,
    dateTime: response.draft_berita.created_at,
    wartawan: response.draft_berita.user_wartawan?.username ?? "",
    editor: response.draft_berita.user_redaktur?.username ?? "",
    status: response.draft_berita.status,
    version: response.draft_berita.version,
    maxVersion: response.total_version,
    draft_id: response.draft_berita.draft_id,
    validation: ValidationDataModel(response.validation_result),
  };
}
