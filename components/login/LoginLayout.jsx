import React from "react";
import LoginInput from "./LoginInput";
import DefaultLoading from "../shared/DefaultLoading";

export default function LoginLayout({ login }) {
  return (
    <div className="flex">
      <div className="w-1/2 bg-yellow-700 h-screen" />
      <div className="w-1/2 min-w-[512px] bg-slate-50 px-6 flex items-center justify-center">
        <LoginInput login={login} />
      </div>
    </div>
  );
}
