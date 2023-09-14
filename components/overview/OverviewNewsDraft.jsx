import React from "react";
import OverviewNewsDraftItem from "./OverviewNewsDraftItem";
import { useRouter } from "next/router";

export default function OverviewNewsDraft() {
  const router = useRouter();

  return (
    <div className="mr-6 pb-6 bg-neutral-50 rounded-md border border-zinc-300">
      <p className="text-black text-2xl font-extrabold px-6 pt-6 pb-4">
        Draft Berita Terbaru
      </p>
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={"Kota Surabaya Juara Umum Porprov Jatim 2023 Cabang Esports"}
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Kronologi 3 Karyawan Pabrik di Karanganyar Terbakar Semburan Uap Panas"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Tradisi King Hoo Ping, Kelenteng Tay Kak Sie Semarang Bagi 5.000 Paket Sembako"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Ini Dia Pengganti Rivan Nurmulki Pilihan Pelatih Timnas Voli Putra Indonesia"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
      <OverviewNewsDraftItem
        onClick={() => router.push("news_draft/edit/1")}
        title={
          "Breaking News! Toko Sepatu dan Sandal di Coyudan Solo Ludes Terbakar"
        }
        author={"Wahyu T"}
        dateTime={"Senin, 4 Agustus 2023 11:54"}
      />
    </div>
  );
}
