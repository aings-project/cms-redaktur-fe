import React, { Dispatch, useEffect } from "react";
import OverviewLayout from "../../components/overview/OverviewLayout";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main/MainLayout";
import { asyncReceiveOverviewData } from "../../states/overview/action";
import { PlaceholderNewsDraftCountByStatusModel } from "../../models/NewsDraftCountByStatusModel";
import { RootState } from "../../states";

export default function Overview() {
  const dispatch : Dispatch<any> = useDispatch();

  const overviewData = useSelector((state: RootState) => state.overview);

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
