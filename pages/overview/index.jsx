import React, { useEffect } from "react";
import OverviewLayout from "../../components/overview/OverviewLayout";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main/MainLayout";
import { asyncReceiveOverviewData } from "../../states/overview/action";
import { PlaceholderNewsDraftCountByStatusModel } from "../../models/NewsDraftCountByStatusModel";

export default function Overview() {
  const dispatch = useDispatch();

  const overviewData = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch(asyncReceiveOverviewData());
  }, [dispatch]);

  return (
    <MainLayout
      activePage="ikhtisar"
      content={
        <OverviewLayout
          lastEdited={overviewData?.lastEdited ? [overviewData.lastEdited] : []}
          draftCount={
            overviewData?.draftCount
              ? overviewData.draftCount
              : PlaceholderNewsDraftCountByStatusModel()
          }
          activityList={
            overviewData?.activityLogs ? overviewData.activityLogs : []
          }
        />
      }
      pageTitle="Ikhtisar"
    />
  );
}
