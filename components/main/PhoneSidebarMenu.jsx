export default function PhoneSidebarMenu({ text, icon, isSelected, onClick }) {
  return (
    <button
      className={`flex px-4 py-2 text-white text-base font-semibold w-full ${
        isSelected ? "bg-yellow-600 hover:bg-yellow-700" : "hover:bg-slate-600"
      }`}
      onClick={onClick}
    >
      {icon}
      <p className="text-white text-base font-semibold ml-4">{text}</p>
    </button>
  );
}
