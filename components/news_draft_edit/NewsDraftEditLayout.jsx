import React, { useState } from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import Editor from "../shared/Editor";
import { useRouter } from "next/router";
import ValidateModal from "./ValidateModal";

export default function NewsDraftEditLayout() {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState("Sedang Disunting");
  const router = useRouter();
  const markdown = `
  Sebuah gempabumi tektonik dengan magnitudo 6,3 mengguncang wilayah Laut Jawa pada tanggal 6 Februari 2020. Gempa ini terjadi pada pukul 09.15 WIB dan pusat gempa berada di kedalaman 10 kilometer. Meskipun gempa ini cukup kuat, namun Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) menyatakan bahwa gempa ini tidak berpotensi tsunami.

Menurut BMKG, gempa ini terjadi akibat adanya aktivitas subduksi lempeng di wilayah Laut Jawa. Lempeng Indo-Australia yang bergerak ke arah utara bertemu dengan lempeng Eurasia yang bergerak ke arah selatan. Benturan kedua lempeng ini menyebabkan terjadinya gempa tektonik yang cukup kuat.

Meskipun gempa ini tidak berpotensi tsunami, namun warga di sekitar wilayah Laut Jawa tetap diimbau untuk tetap waspada. Gempa ini dapat menyebabkan kerusakan pada bangunan yang tidak kuat dan juga dapat memicu terjadinya gempa susulan. Oleh karena itu, BMKG mengimbau agar masyarakat tetap tenang dan mengikuti petunjuk evakuasi jika diperlukan.

Pemerintah juga telah mengirimkan tim untuk melakukan pemantauan dan evaluasi terhadap dampak gempa ini. Tim ini akan melakukan pengecekan terhadap bangunan-bangunan di sekitar wilayah Laut Jawa untuk memastikan keamanannya. Selain itu, pemerintah juga akan memberikan bantuan kepada masyarakat yang terdampak gempa ini.

Meskipun gempa ini tidak berpotensi tsunami, namun perlu diingat bahwa Indonesia merupakan negara yang berada di Cincin Api Pasifik, sehingga rentan terhadap gempa bumi. Oleh karena itu, penting bagi masyarakat untuk selalu meningkatkan kewaspadaan dan mempersiapkan diri menghadapi bencana alam seperti gempa bumi.
  `;

  return (
    <>
      <div className="bg-neutral-50 h-screen overflow-y-auto max-h-screen">
        <div className="flex">
          <div className="p-6 w-full flex flex-col max-h-screen max-w-screen-lg mx-auto bg-white">
            <button className="w-full flex" onClick={() => router.push("/")}>
              <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
            </button>
            <input
              className="w-full bg-white text-2xl font-semibold mb-4"
              value={
                "Gempabumi Tektonik M 6,3 di Laut Jawa (6 Februari 2020), Tidak Berpotensi Tsunami"
              }
              onChange={() => {}}
            />
            <Editor
              placeholder={markdown}
              className="overflow-y-auto max-w-screen-lg mx-auto w-full bg-white flex-1 border"
              onChange={(value) => {
                setText(value);
              }}
            />
          </div>
          <NewsDraftEditSidebar
            onSetStatus={(value) => setStatus(value)}
            status={status}
            isValid={isValid}
            isValidated={isValidated}
            markdown={text}
            onValidate={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal ? (
        <ValidateModal
          onClose={() => setShowModal(false)}
          onValidate={() => {
            setIsValidated(true);
            setIsValid(false);
            setShowModal(false);
          }}
        />
      ) : null}
    </>
  );
}
