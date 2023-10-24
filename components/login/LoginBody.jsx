import React from "react";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function LoginBody({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const isLoading = useSelector((state) => state.loading);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-sm">
      <p className="mb-12 text-6xl font-extrabold text-center text-sky-700 md:hidden">
        AINGS
      </p>
      <p className="text-2xl font-bold mb-6 hidden md:flex">Selamat Datang</p>
      <p className="text-black font-normal mb-1">Email</p>
      <input
        className="border border-neutral-400 focus:outline-sky-500 rounded-md w-full h-10 mb-4 px-2"
        placeholder="Masukkan email"
        value={email}
        onChange={onEmailChange}
      />
      <p className="text-black font-normal mb-1">Kata Sandi</p>
      <input
        className="border border-neutral-400 focus:outline-sky-500 rounded-md w-full h-10 px-2"
        type="password"
        placeholder="Masukkan Kata Sandi"
        value={password}
        onChange={onPasswordChange}
      />
      <div className="flex justify-end w-full ">
        {isLoading && (
          <div className="w-full flex justify-center mt-6 bg-sky-600 py-2 rounded-md">
            <ReactLoading type="spin" height={24} width={24} />
          </div>
        )}
        {!isLoading && (
          <button
            onClick={() => login({ email, password })}
            className="w-full h-10 mt-6 bg-sky-600 hover:bg-sky-500 text-white text-base font-semibold rounded-md"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
