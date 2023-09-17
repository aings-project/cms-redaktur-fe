function convertStatus({ value }) {
  if (value === "reviewing") {
    return "Sedang Disunting";
  } else if (value === "reviewed") {
    return "Menunggu Persetujuan Wartawan";
  }
  return value;
}

export { convertStatus };
