import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import MainSidebarMenu from "./MainSidebarMenu";
import { Delete, MenuRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function MainSidebar({ activePage, auth, onSignOut }) {
  const router = useRouter();
  if (!auth) {
    return <div />;
  }

  return (
    <div className="hidden h-screen lg:min-w-[300px] bg-slate-800 py-6 sm:flex flex-col relative overflow-hidden min-w-fit">
      <div className="md:flex px-4 mb-12 hidden">
        <AccountCircleIcon className="w-16 h-16 text-white" />
        <div className="px-4">
          <p className="text-white text-base font-bold">{auth.username}</p>
          <p className="text-white text-sm font-normal">{auth.email}</p>
        </div>
      </div>
      <div className="mb-6 md:hidden">
        <MainSidebarMenu
          icon={<MenuRounded className="w-6 h-6 text-white" />}
          text={""}
          isSelected={false}
          onClick={() => {}}
        />
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
          onClick={onSignOut}
          icon={<LogoutIcon className="w-6 h-6 text-white" />}
          text={"Keluar"}
          isSelected={false}
        />
      </div>
    </div>
  );
}
