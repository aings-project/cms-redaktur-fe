export default function NewsDraftPromptModel(response) {
  if (response) {
    return response.content.replace("Buatkan berita mengenai ", "");
  }
  return "Tidak ada";
}
