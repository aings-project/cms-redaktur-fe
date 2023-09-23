import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import MainSidebarMenu from "./MainSidebarMenu";
import MainSidebarMiniMenu from "./MainSidebarMiniMenu";
import { Delete, Menu, MoreVert } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { asyncUnsetAuthUser } from "../../states/auth/action";

export default function MainSidebar({ activePage, auth }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    router.push("/");
  };

  if (!auth) {
    return <div />;
  }

  return (
    <div>
      <div className="flex flex-col md:hidden bg-slate-800 py-6 h-screen max-w-fit">
        <MainSidebarMiniMenu
          icon={<Menu className="w-6 h-6 text-white" />}
          isSelected={false}
          onClick={() => {}}
        />
        <MainSidebarMiniMenu
          icon={<QueryStatsIcon className="w-6 h-6 text-white" />}
          isSelected={activePage === "ikhtisar"}
          onClick={() => router.push("/overview")}
        />
        <MainSidebarMiniMenu
          icon={<DraftsIcon className="w-6 h-6 text-white" />}
          isSelected={activePage === "draf_berita"}
          onClick={() => router.push("/news_draft")}
        />
        <MainSidebarMiniMenu
          icon={<NewspaperIcon className="w-6 h-6 text-white" />}
          isSelected={activePage === "publikasi"}
        />
        <MainSidebarMiniMenu
          icon={<CommentIcon className="w-6 h-6 text-white" />}
          isSelected={activePage === "komentar"}
        />
        <MainSidebarMiniMenu
          icon={<Delete className="w-6 h-6 text-white" />}
          isSelected={activePage === "ditolak"}
        />
        <div className="mt-auto">
          <MainSidebarMiniMenu
            onClick={onSignOut}
            icon={<LogoutIcon className="w-6 h-6 text-white" />}
            isSelected={false}
          />
        </div>
      </div>
      <div className="hidden w-[280px] min-w-[280px] h-screen bg-slate-800 py-6 md:flex flex-col relative overflow-hidden">
        <div className="flex px-4 mb-12">
          <AccountCircleIcon className="w-16 h-16 text-white" />
          <div className="px-4">
            <p className="text-white text-base font-bold">{auth.username}</p>
            <p className="text-white text-sm font-normal">{auth.email}</p>
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
            onClick={onSignOut}
            icon={<LogoutIcon className="w-6 h-6 text-white" />}
            text={"Keluar"}
            isSelected={false}
          />
        </div>
      </div>
    </div>
  );
}
