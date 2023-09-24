import React, { useEffect } from "react";
import OverviewLayout from "../../components/overview/OverviewLayout";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveOverviewNewsDraft } from "../../states/overview/action";
import MainLayout from "../../components/main/MainLayout";

export default function Overview() {
  const dispatch = useDispatch();

  const newsDraftOverview =
    useSelector((state) => state.newsDraftOverview) || [];

  useEffect(() => {
    dispatch(asyncReceiveOverviewNewsDraft());
  }, [dispatch]);

  return (
    <MainLayout
      activePage="ikhtisar"
      content={<OverviewLayout newsDraftList={newsDraftOverview} />}
    />
  );
}
