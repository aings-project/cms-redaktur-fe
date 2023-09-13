import { Search } from "@mui/icons-material";
import React from "react";
import NewsDraftTabBar from "./NewsDraftTabBar";
import NewsDraftItem from "./NewsDraftItem";
import { useRouter } from "next/router";

export default function NewsDraftLayout() {
  const router = useRouter();
  return (
    <div className="bg-neutral-50 py-16 px-16 flex-grow h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between mb-6">
          <p className="text-black text-4xl font-extrabold">
            AINGS - Draf Berita
          </p>
          <div className="bg-white p-2 border border-zinc-300 rounded-md h-fit">
            <div className="flex items-center">
              <input className="p-2" placeholder="Cari Judul Berita ..." />
              <Search />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md border border-zinc-300 pb-6">
          <NewsDraftTabBar />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={"Jokowi Turun dari Langit Saat Serangan 10 September"}
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Dua Pemuda Berkelahi karena Rebutan Gulai Buatan Makaji di Pernikahan Ipar Sultan Brunei"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={"Jokowi Turun dari Langit Saat Serangan 10 September"}
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Dua Pemuda Berkelahi karena Rebutan Gulai Buatan Makaji di Pernikahan Ipar Sultan Brunei"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
          <NewsDraftItem
            onClick={() => router.push("news_draft/edit/1")}
            title={
              "Seorang Pemuda Resah Iklan Youtubenya Pinjaman Online Semua Padahal Tidak Kekurangan Uang"
            }
            author={"Wahyu T"}
            dateTime={"Senin, 4 Agustus 2023 11:54"}
          />
        </div>
      </div>
    </div>
  );
}
