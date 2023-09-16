import React from "react";
import NewsDraftEditLayout from "../../../components/news_draft_edit/NewsDraftEditLayout";
import useRequireAuth from "../../../hooks/useRequireAuth";

export default function EditNewsDraft() {
  const auth = useRequireAuth();

  return <NewsDraftEditLayout />;
}
