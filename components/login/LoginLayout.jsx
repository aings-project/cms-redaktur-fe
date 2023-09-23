import React from "react";
import LoginInput from "./LoginInput";

export default function LoginLayout({ login }) {
  return (
    <div className="flex bg-slate-50 h-screen">
      <div className="hidden md:block md:w-1/2 lg:w-3/5 bg-yellow-700" />
      <div className="px-6 flex items-center justify-center w-full md:w-1/2 lg:w-2/5">
        <LoginInput login={login} />
      </div>
    </div>
  );
}
