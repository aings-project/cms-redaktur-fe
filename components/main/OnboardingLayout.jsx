import React from "react";
import ReactLoading from "react-loading";

export default function OnboardingLayout({}) {
  return (
    <div className="h-[calc(100dvh)] w-[calc(100dcw)] bg-gradient-to-b from-sky-800 to-sky-600 flex justify-center flex-col items-center text-center">
      <p className="text-3xl text-white font-bold mb-8">
        Selamat Datang di AINGS
      </p>
      <ReactLoading type="spin" />
      <p className="text-white mt-4">Mohon tunggu</p>
    </div>
  );
}
