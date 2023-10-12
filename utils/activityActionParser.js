function activityActionParserShort(value) {
  switch (value) {
    case "reviewing":
      return "disunting";
    case "reviewed":
      return "sedang diulas oleh wartawan";
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

function activityActionParserLong(value) {
  switch (value) {
    case "reviewing":
      return "Melakukan Perubahan";
    case "reviewed":
      return "Meminta Persetujuan Wartawan";
    case "new":
      return "Baru Ditambahkan oleh Wartawan";
    case "approved":
      return "Disetujui oleh Wartawan";
    case "published":
      return "Dipublikasikan";
    case "rejected":
      return "Ditolak oleh Redaktur";
    default:
      return value;
  }
}

export { activityActionParserShort, activityActionParserLong };
