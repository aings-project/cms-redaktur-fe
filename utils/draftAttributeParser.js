function convertStatus({ value }) {
  switch (value) {
    case "reviewing":
      return "Sedang Disunting";
    case "reviewed":
      return "Menunggu Persetujuan Wartawan";
    case "new":
      return "Baru";
    case "approved":
      return "Menunggu Publikasi";
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
    case "Menunggu Persetujuan Wartawan":
      return "reviewed";
    case "Menunggu Publikasi":
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

function parseNavigationToStatus(value) {
  switch (value) {
    case "Semua Draf":
      return "new,reviewing,reviewed";
    case "Baru":
      return "new";
    case "Sedang Disunting":
      return "reviewing";
    case "Menunggu Persetujuan":
      return "reviewed";
    case "Semua Publikasi":
      return "approved,published";
    case "Menunggu Publikasi":
      return "approved";
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

export { convertStatus, reverseConvertStatus, parseNavigationToStatus };
