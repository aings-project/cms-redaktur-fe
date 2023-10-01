export default function activityActionParser(value) {
  switch (value) {
    case "reviewing":
      return "disunting";
    case "reviewed":
      return "diubah statusnya menjadi Menunggu Persetujuan Wartawan";
    case "new":
      return "ditambahkan oleh wartawan";
    case "approved":
      return "sudah disetujui oleh wartawan";
    case "published":
      return "telah dipublikasikan";
    case "rejected":
      return "ditolak oleh redaktur";
    default:
      return value;
  }
}
