function convertStatus({ value }) {
  switch (value) {
    case "reviewing":
      return "Sedang Disunting";
    case "reviewed":
      return "Dikembalikan Kepada Wartawan";
    case "new":
      return "Baru";
    case "published":
      return "Sudah Publikasi";
    case "rejected":
      return "Draf Ditolak";
    default:
      return value;
  }
}

function parseNavigationToStatus(value) {
  switch (value) {
    case "Semua Draf":
      return "new,reviewing,reviewed";
    case "Baru":
      return "new";
    case "Sedang Disunting":
      return "reviewing";
    case "Dikembalikan Ke Wartawan":
      return "reviewed";
    case "Sudah Publikasi":
      return "published";
    case "Ditolak":
      return "rejected";
    case "Semua":
      return null;
    default:
      return value;
  }
}

export { convertStatus, parseNavigationToStatus };
