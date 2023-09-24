import React from "react";
import PhoneSidebarMenu from "../../components/main/PhoneSidebarMenu";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Delete } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function PhoneSidebar({ isHidden, activePage }) {
  const router = useRouter();

  return (
    <div
      className={`h-screen z-10 bg-slate-800 w-2/3 absolute top-0 left-0 pt-16 sm:hidden ${
        isHidden ? "hidden" : ""
      }`}
    >
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
      <div className="mt-auto">
        <PhoneSidebarMenu
          onClick={() => {}}
          icon={<LogoutIcon className="w-6 h-6 text-white" />}
          text={"Keluar"}
          isSelected={false}
        />
      </div>
    </div>
  );
}
