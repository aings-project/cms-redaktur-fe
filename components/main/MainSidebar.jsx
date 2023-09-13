import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import MainSidebarMenu from "./MainSidebarMenu";
import { Delete } from "@mui/icons-material";

export default function MainSidebar({ activePage }) {
  const router = useRouter();

  return (
    <div className="w-[280px] h-screen bg-zinc-800 py-6 flex flex-col relative overflow-hidden">
      <div className="flex px-4 mb-12">
        <AccountCircleIcon className="w-16 h-16 text-white" />
        <div className="px-4">
          <p className="text-white text-base font-bold">Muhammad Paidi</p>
          <p className="text-white text-sm font-normal">paidi@aings.com</p>
        </div>
      </div>
      <MainSidebarMenu
        icon={<QueryStatsIcon className="w-6 h-6 text-white" />}
        text={"Ikhtisar"}
        isSelected={activePage === "ikhtisar"}
        onClick={() => router.push("/overview")}
      />
      <MainSidebarMenu
        icon={<DraftsIcon className="w-6 h-6 text-white" />}
        text={"Draf Berita"}
        isSelected={activePage === "draf_berita"}
        onClick={() => router.push("/news_draft")}
      />
      <MainSidebarMenu
        icon={<NewspaperIcon className="w-6 h-6 text-white" />}
        text={"Publikasi"}
        isSelected={activePage === "publikasi"}
      />
      <MainSidebarMenu
        icon={<CommentIcon className="w-6 h-6 text-white" />}
        text={"Komentar"}
        isSelected={activePage === "komentar"}
      />
      <MainSidebarMenu
        icon={<Delete className="w-6 h-6 text-white" />}
        text={"Ditolak"}
        isSelected={activePage === "ditolak"}
      />
      <div className="mt-auto">
        <MainSidebarMenu
          icon={<LogoutIcon className="w-6 h-6 text-white" />}
          text={"Keluar"}
          isSelected={false}
        />
      </div>
    </div>
  );
}
