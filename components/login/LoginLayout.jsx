import React from "react";
import LoginBody from "./LoginBody";

export default function LoginLayout({ login }) {
  return (
    <div className="flex h-[calc(100dvh)] bg-slate-800 justify-center items-center">
      <div className="px-6 md:h-fit h-full flex items-center justify-center w-full md:w-1/2 xl:w-2/5 bg-slate-50 shadow-xl py-10 rounded-md">
        <LoginBody login={login} />
      </div>
    </div>
  );
}
