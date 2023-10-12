import React from "react";
import PhoneSidebarMenu from "../../components/main/PhoneSidebarMenu";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Close, Delete, History } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function PhoneSidebar({
  isHidden,
  activePage,
  auth,
  onSignOut,
  onHide,
}) {
  const router = useRouter();

  return (
    <div
      className={`h-[calc(100dvh)] z-20 bg-slate-800 w-full absolute top-0 left-0 sm:hidden shadow-lg transition-transform duration-300 ${
        isHidden ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex px-4 py-6 items-center justify-between">
        <p className="text-white text-3xl font-extrabold">AINGS</p>
        <button
          onClick={() => {
            onHide();
          }}
        >
          <Close className="text-white hover:cursor-pointer" />
        </button>
      </div>

      <div className="px-4 pb-2 bg-slate-800 mb-6">
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
        isSelected={activePage === "publication"}
        onClick={() => router.push("/publication")}
      />
      <PhoneSidebarMenu
        icon={<Delete className="w-6 h-6 text-white" />}
        text={"Ditolak"}
        isSelected={activePage === "rejected"}
        onClick={() => router.push("/rejected")}
      />
      <PhoneSidebarMenu
        icon={<History className="w-6 h-6 text-white" />}
        text={"Aktivitas"}
        isSelected={activePage === "activities"}
        onClick={() => router.push("/activities")}
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
