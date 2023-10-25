function activityActionParserShort(value) {
  switch (value) {
    case "reviewing":
      return "Menyunting draf berjudul";
    case "reviewed":
      return "Menunggu konfirmasi wartawan untuk berita";
    case "new":
      return "Menambahkan berita berjudul";
    case "approved":
      return "Menyetujui berita";
    case "published":
      return "Mempublikasikan berita";
    case "rejected":
      return "Menolak berita";
    case "with_data":
      return "Melakukan validasi untuk berita";
    case "without_data":
      return "Melakukan validasi untuk berita";
    case "comment":
      return "Mengomentari";
    default:
      return value;
  }
}

function activityActionParserLong(value) {
  switch (value) {
    case "reviewing":
      return "Mengubah berita";
    case "reviewed":
      return "Meminta Persetujuan Wartawan";
    case "new":
      return "Menambahkan berita";
    case "approved":
      return "Menyetujui berita";
    case "published":
      return "Dipublikasikan";
    case "rejected":
      return "Menolak berita";
    case "with_data":
      return "Melakukan validasi";
    case "without_data":
      return "Melakukan validasi";
    case "comment":
      return "Mengomentari";
    default:
      return value;
  }
}

export { activityActionParserShort, activityActionParserLong };
