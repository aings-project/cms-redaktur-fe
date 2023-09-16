import React from "react";
import useInput from "../../hooks/useInput";

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <div>
      <p className="text-black text-5xl font-extrabold text-center">AINGS</p>
      <p className="text-center text-2xl font-normal mt-6 mb-12">
        Artificial Intelligence News Generating System
      </p>
      <p className="text-black text-xl font-semibold mb-2">Username</p>
      <input
        className="border border-black rounded-md w-full h-10 mb-6 px-2"
        placeholder="Masukkan username"
        value={email}
        onChange={onEmailChange}
      />
      <p className="text-black text-xl font-semibold mb-2">Kata Sandi</p>
      <input
        className="border border-black rounded-md w-full h-10 px-2"
        type="password"
        placeholder="Masukkan Kata Sandi"
        value={password}
        onChange={onPasswordChange}
      />
      <div className="flex justify-end w-full ">
        <button
          onClick={() => login({ email, password })}
          className="w-1/2 h-10 mt-6 bg-sky-700 text-white text-base font-semibold rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}
