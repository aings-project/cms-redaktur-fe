const navMenus = ["Draf Berita", "Publikasi Berita", "Berita Ditolak"];
const drafStatus = [
  "Semua Draf",
  "Baru",
  "Sedang Disunting",
  "Dikembalikan Ke Wartawan",
];
const publicationStatus = [
  "Semua Publikasi",
  "Disetujui Wartawan",
  "Sudah Publikasi",
];

const activitiesFilter = [
  { value: "new", label: "Menambahkan Draf" },
  { value: "rejected", label: "Menolak Draf" },
  { value: "reviewing", label: "Menyunting Draf" },
  { value: "with_data", label: "Melakukan Validasi" },
  { value: "reviewed", label: "Mengirim ke Wartawan" },
  { value: "comment", label: "Mengomentari Berita" },
];
const rejectedStatus = ["Ditolak"];

export {
  drafStatus,
  publicationStatus,
  rejectedStatus,
  navMenus,
  activitiesFilter,
};
