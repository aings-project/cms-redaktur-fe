import React from "react";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../states/search_query/action";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";

export default function NewsDraftHeader({ title }) {
  const query = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  function handleValueChange({ target }) {
    dispatch(setSearchQuery({ title: target.value }));
    dispatch(asyncReceiveNewsDraft({ title: target.value }));
  }

  return (
    <div className="flex justify-between mb-5 lg:mb-0 flex-wrap">
      <p className="text-black text-3xl sm:text-4xl font-bold min-w-fit mr-6 mb-5 hidden sm:block">
        {title}
      </p>
      <div className="bg-white p-2 border border-sky-300 hover:border-sky-600 hover:border-2 rounded-md h-fit w-full md:w-fit">
        <div className="flex items-center justify-between">
          <input
            className="p-1 w-full focus:outline-none"
            placeholder="Cari Judul Berita ..."
            value={query}
            onChange={handleValueChange}
          />
          <Search />
        </div>
      </div>
    </div>
  );
}
