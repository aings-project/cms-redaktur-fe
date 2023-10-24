import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import MainSidebarMenu from "./MainSidebarMenu";
import { History, MenuRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function MainSidebar({ activePage, auth, onSignOut }) {
  const router = useRouter();
  if (!auth) {
    return <div />;
  }

  return (
    <div className="hidden h-screen lg:min-w-[300px] bg-gray-700 py-4 sm:flex flex-col relative overflow-hidden min-w-fit">
      <div className="md:flex items-center px-4 mb-12 hidden">
        <div className="text-white bg-sky-600 px-4 py-2 text-xl rounded-md">
          {auth.username.substring(0, 1).toUpperCase()}
        </div>
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
        icon={<NewspaperIcon className="w-6 h-6 text-white" />}
        text={"Berita"}
        isSelected={activePage === "draf_berita"}
        onClick={() => router.push("/news_draft")}
      />
      <MainSidebarMenu
        icon={<History className="w-6 h-6 text-white" />}
        text={"Aktivitas"}
        isSelected={activePage === "activities"}
        onClick={() => router.push("/activities")}
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
