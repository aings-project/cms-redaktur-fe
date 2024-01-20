type DataStatus = {
  title: string,
  color: string,
  value: number
}

const statusDataPlaceholder: DataStatus[] = [
  { title: "Belum Disunting", color: "#94a3b8", value: 0 },
  {
    title: "Sedang Disunting",
    color: "#f59e0b",
    value: 0,
  },
];

export { statusDataPlaceholder };
