import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";

export default function OverviewReadyPublish() {
  const router = useRouter();

  return (
    <div className="mr-6 pb-6 flex-grow bg-neutral-50 rounded-md border border-zinc-300">
      <p className="text-black text-2xl font-extrabold px-6 pt-6 pb-4">
        Siap Publikasi
      </p>
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Nginap di Rumah Teman, Remaja Semarang Meninggal dengan Luka Lebam"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "ODGJ Panjat Tower di Kuningan Semarang, Turun Setelah Diberi Rokok dan Es Teh"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
    </div>
  );
}
