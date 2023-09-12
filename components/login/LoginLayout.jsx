import React from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export default function LoginLayout({ onLogin }) {
  return (
    <div className="flex">
      <div className="w-1/2 bg-zinc-800 h-screen" />
      <div className="w-1/2 min-w-[512px] bg-slate-50 px-6 flex items-center justify-center">
        <div>
          <p className="text-black text-5xl font-extrabold text-center">
            AINGS
          </p>
          <p className="text-center text-2xl font-normal mt-6 mb-12">
            Artificial Intelligence News Generating System
          </p>
          <p className="text-black text-xl font-semibold mb-2">Username</p>
          <input
            className="border border-black rounded-md w-full h-10 mb-6 px-2"
            placeholder="Masukkan username"
          />
          <p className="text-black text-xl font-semibold mb-2">Kata Sandi</p>
          <input
            className="border border-black rounded-md w-full h-10 px-2"
            type="password"
            placeholder="Masukkan Kata Sandi"
          />
          <div className="flex justify-end w-full ">
            <button
              onClick={onLogin}
              className="w-1/2 h-10 mt-6 bg-sky-700 text-white text-base font-semibold rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
