import React, { useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import useRequireAuth from "../../hooks/useRequireAuth";
import { Menu } from "@mui/icons-material";
import PhoneSidebar from "../../components/main/PhoneSidebar";

export default function MainLayout({ content, activePage, pageTitle }) {
  const auth = useRequireAuth();
  const [hideNavbar, setHideNavbar] = useState(true);

  if (!auth) {
    return null;
  }

  const handleToggle = () => {
    setHideNavbar((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="sm:hidden fixed top-0 left-0 right-0 z-20 w-full px-4 py-3 flex justify-between">
        <p className="ml-4 text-slate-800 font-bold text-2xl">{pageTitle}</p>
        <button onClick={handleToggle}>
          <Menu />
        </button>
      </div>
      <PhoneSidebar isHidden={hideNavbar} activePage={activePage} auth={auth} />
      <div className="flex">
        <MainSidebar activePage={activePage} auth={auth} />
        {content}
      </div>
    </div>
  );
}
