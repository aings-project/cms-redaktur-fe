import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";

export default function OverviewReadyPublish() {
  const router = useRouter();

  return (
    <div className=" ml-0 mr-4 p-6 flex-grow bg-white rounded-md border border-zinc-300">
      <p className="text-black text-2xl font-semibold mb-6">Siap Dipublikasi</p>
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={"Jokowi Turun dari Langit Saat Serangan 10 September"}
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Dua Pemuda Berkelahi karena Rebutan Gulai Buatan Makaji di Pernikahan Ipar Sultan Brunei"
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
