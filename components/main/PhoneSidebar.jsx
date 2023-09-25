import React from "react";
import PhoneSidebarMenu from "../../components/main/PhoneSidebarMenu";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Delete } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function PhoneSidebar({
  isHidden,
  activePage,
  auth,
  onSignOut,
}) {
  const router = useRouter();

  return (
    <div
      className={`h-screen z-20 bg-slate-800 w-2/3 absolute top-0 left-0 sm:hidden shadow-lg transition-transform duration-300 ${
        isHidden ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <p className="text-white text-3xl font-extrabold px-4 py-6">AINGS</p>
      <div className="px-4 pb-2 bg-slate-800">
        <p className="text-white text-base font-bold">{auth.username}</p>
        <p className="text-white text-sm font-normal">{auth.email}</p>
      </div>
      <PhoneSidebarMenu
        icon={<QueryStatsIcon className="w-6 h-6 text-white" />}
        text={"Ikhtisar"}
        isSelected={activePage === "ikhtisar"}
        onClick={() => router.push("/overview")}
      />
      <PhoneSidebarMenu
        icon={<DraftsIcon className="w-6 h-6 text-white" />}
        text={"Draf Berita"}
        isSelected={activePage === "draf_berita"}
        onClick={() => router.push("/news_draft")}
      />
      <PhoneSidebarMenu
        icon={<NewspaperIcon className="w-6 h-6 text-white" />}
        text={"Publikasi"}
        isSelected={activePage === "publikasi"}
      />
      <PhoneSidebarMenu
        icon={<CommentIcon className="w-6 h-6 text-white" />}
        text={"Komentar"}
        isSelected={activePage === "komentar"}
      />
      <PhoneSidebarMenu
        icon={<Delete className="w-6 h-6 text-white" />}
        text={"Ditolak"}
        isSelected={activePage === "ditolak"}
      />
      <PhoneSidebarMenu
        onClick={onSignOut}
        icon={<LogoutIcon className="w-6 h-6 text-red-500" />}
        text={"Keluar"}
        isSelected={false}
      />
    </div>
  );
}
