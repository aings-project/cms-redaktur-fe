import React from "react";
import MainSidebar from "../components/MainSidebar";
import NewsDraftLayout from "../components/NewsDraftLayout";

export default function Home() {
  return (
    <div className="flex">
      <MainSidebar />
      <NewsDraftLayout />
    </div>
  );
}
