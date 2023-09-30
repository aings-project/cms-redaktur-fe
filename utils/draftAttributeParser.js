function convertStatus({ value }) {
  if (value === "reviewing") {
    return "Sedang Disunting";
  } else if (value === "reviewed") {
    return "Menunggu Persetujuan Wartawan";
  }
  return value;
}

function reverseConvertStatus(value) {
  if (value === "Baru") {
    return "new";
  } else if (value === "Sedang Disunting") {
    return "reviewing";
  } else if (value === "Menunggu Persetujuan") {
    return "reviewed";
  }

  return value;
}

export { convertStatus, reverseConvertStatus };
