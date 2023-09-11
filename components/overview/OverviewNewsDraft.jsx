import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";

export default function OverviewNewsDraft() {
  const router = useRouter();

  return (
    <div className="mt-6 ml-6 mr-12 flex-grow">
      <p className="text-black text-2xl font-normal mb-6">
        Draft Berita Terbaru
      </p>
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
