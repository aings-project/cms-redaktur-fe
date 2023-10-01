import React from "react";
import LoginInput from "./LoginInput";

export default function LoginLayout({ login }) {
  return (
    <div className="flex h-[calc(100dvh)] bg-slate-800 justify-center items-center">
      <div className="px-6 h-fit flex items-center justify-center w-full md:w-1/2 xl:w-2/5 bg-slate-100 shadow-xl py-10 rounded-md">
        <LoginInput login={login} />
      </div>
    </div>
  );
}
