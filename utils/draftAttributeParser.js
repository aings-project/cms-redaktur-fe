function convertStatus({ value }) {
  switch (value) {
    case "reviewing":
      return "Sedang Disunting";
    case "reviewed":
      return "Menunggu Persetujuan";
    case "new":
      return "Baru";
    case "approved":
      return "Siap Publikasi";
    case "published":
      return "Sudah Publikasi";
    case "rejected":
      return "Draf Ditolak";
    default:
      return value;
  }
}

function reverseConvertStatus(value) {
  switch (value) {
    case "Baru":
      return "new";
    case "Sedang Disunting":
      return "reviewing";
    case "Menunggu Persetujuan":
      return "reviewed";
    case "Siap Publikasi":
      return "approved";
    case "Sudah Publikasi":
      return "published";
    case "Draf Ditolak":
      return "rejected";
    case "Semua":
      return null;
    default:
      return value;
  }
}

export { convertStatus, reverseConvertStatus };
