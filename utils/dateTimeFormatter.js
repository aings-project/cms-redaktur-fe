export default function dateTimeFormatter(inputDateTime) {
  const date = new Date(inputDateTime);

  // Define the names of days and months in Indonesian
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayName = days[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const monthName = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours();
  const minute = (date.getUTCMinutes() < 10 ? "0" : "") + date.getUTCMinutes();

  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}`;
}
