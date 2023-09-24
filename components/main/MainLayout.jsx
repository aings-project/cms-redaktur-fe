import React, { useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import useRequireAuth from "../../hooks/useRequireAuth";
import { Menu } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneSidebar from "../../components/main/PhoneSidebar";
import { useRouter } from "next/router";

export default function MainLayout({ content, activePage }) {
  const auth = useRequireAuth();
  const router = useRouter();
  const [hideNavbar, setHideNavbar] = useState(true);

  if (!auth) {
    router.push("/login");
    return null;
  }

  const handleToggle = () => {
    setHideNavbar((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="sm:hidden fixed top-0 left-0 right-0 z-20 w-full bg-slate-800 px-4 py-3 flex justify-between">
        <button onClick={handleToggle}>
          <Menu className="text-white" />
        </button>
        <div className="flex">
          <AccountCircleIcon className="text-white mr-2" />
          <p className="text-white font-semibold">{auth.username}</p>
        </div>
      </div>
      <PhoneSidebar isHidden={hideNavbar} activePage={activePage} />
      <div className="flex">
        <MainSidebar activePage={activePage} auth={auth} />
        {content}
      </div>
    </div>
  );
}
