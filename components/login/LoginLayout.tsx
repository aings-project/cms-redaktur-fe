import React from "react";
import LoginBody from "./LoginBody";

export default function LoginLayout({ login }) {
  return (
    <div className="flex h-[calc(100dvh)] bg-gradient-to-l from-sky-800 to-sky-600">
      <div className="w-full flex justify-center">
        <div className="w-1/2 hidden md:flex flex-col justify-center items-center px-6">
          <p className="text-7xl lg:text-8xl xl:text-9xl text-white font-bold pb-2">
            AINGS
          </p>
          <p className="text-md lg:text-xl text-white font-semibold text-center">
            Automatic Indonesian News Generator System
          </p>
        </div>
        <div className="px-6 h-full flex items-center justify-center w-full md:w-1/2 max-w-lg bg-white shadow-xl py-10 rounded-md">
          <LoginBody login={login} />
        </div>
      </div>
    </div>
  );
}
