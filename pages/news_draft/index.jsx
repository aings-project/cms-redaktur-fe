import React, { useEffect } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import NewsDraftLayout from "../../components/news_draft/NewsDraftLayout";
import useRequireAuth from "../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveNewsDraft } from "../../states/news_draft/action";

export default function NewsDraft() {
  const auth = useRequireAuth();
  const dispatch = useDispatch();

  const listNewsDraft = useSelector((state) => state.newsDraft);

  useEffect(() => {
    dispatch(asyncReceiveNewsDraft());
  }, [dispatch]);

  return (
    <div className="flex">
      <MainSidebar activePage="draf_berita" auth={auth} />
      <NewsDraftLayout listNewsDraft={listNewsDraft} />
    </div>
  );
}
