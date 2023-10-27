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
    <div className="relative w-full">
      <div className="sm:hidden fixed top-0 left-0 right-0 z-20 w-full px-4 py-3 flex bg-white shadow-sm">
        <button className="px-2" onClick={handleToggle}>
          <Menu />
        </button>
        <p className="px-2 text-slate-800 font-bold text-2xl">{pageTitle}</p>
      </div>
      <PhoneSidebar
        isHidden={hideNavbar}
        activePage={activePage}
        auth={auth}
        onSignOut={onSignOut}
        onHide={handleToggle}
      />
      <div
        className={`flex ${
          hideNavbar ? "" : "blur-sm"
        } sm:blur-none h-[calc(100dvh)] overflow-hidden`}
      >
        <MainSidebar
          activePage={activePage}
          auth={auth}
          onSignOut={onSignOut}
        />
        <div className="h-[calc(100dvh)] overflow-y-auto md:px-8 flex-grow bg-sky-50 max-[1600px]:bg-white">
          {content}
        </div>
      </div>
    </div>
  );
}
