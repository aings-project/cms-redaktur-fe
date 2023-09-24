import React, { useState } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import useRequireAuth from "../../hooks/useRequireAuth";
import { Menu } from "@mui/icons-material";
import PhoneSidebar from "../../components/main/PhoneSidebar";
import { useDispatch } from "react-redux";
import { asyncUnsetAuthUser } from "../../states/auth/action";
import { useRouter } from "next/router";

export default function MainLayout({ content, activePage, pageTitle }) {
  const auth = useRequireAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [hideNavbar, setHideNavbar] = useState(true);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    router.push("/");
  };

  if (!auth) {
    return null;
  }

  const handleToggle = () => {
    setHideNavbar((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="sm:hidden fixed top-0 left-0 right-0 z-20 w-full px-4 py-3 flex justify-between bg-white">
        <p className="px-2 text-slate-800 font-bold text-2xl">{pageTitle}</p>
        <button className="px-2" onClick={handleToggle}>
          <Menu />
        </button>
      </div>
      <PhoneSidebar
        isHidden={hideNavbar}
        activePage={activePage}
        auth={auth}
        onSignOut={onSignOut}
      />
      <div className="flex">
        <MainSidebar
          activePage={activePage}
          auth={auth}
          onSignOut={onSignOut}
        />
        {content}
      </div>
    </div>
  );
}
