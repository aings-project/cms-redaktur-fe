import React, { useEffect } from "react";
import MainSidebar from "../../components/main/MainSidebar";
import OverviewLayout from "../../components/overview/OverviewLayout";
import useRequireAuth from "../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveOverviewNewsDraft } from "../../states/overview/action";

export default function Overview() {
  const auth = useRequireAuth();
  const dispatch = useDispatch();

  const newsDraftOverview =
    useSelector((state) => state.newsDraftOverview) || [];

  useEffect(() => {
    dispatch(asyncReceiveOverviewNewsDraft());
  }, [dispatch]);

  return (
    <div className="flex">
      <MainSidebar activePage="ikhtisar" />
      <OverviewLayout newsDraftList={newsDraftOverview} />
    </div>
  );
}
