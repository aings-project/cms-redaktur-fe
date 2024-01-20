import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main/MainLayout";
import ActivitiesLayout from "../../components/activities/ActivitiesLayout";
import { asyncReceiveActivities } from "../../states/activities/action";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(asyncReceiveActivities({ page: 1 }));
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(asyncReceiveActivities({ page }));
  };

  return (
    <MainLayout
      activePage="activities"
      content={
        <ActivitiesLayout
          activities={activities?.activity_logs ? activities.activity_logs : []}
          currentPage={activities?.current_page ? activities.current_page : 1}
          totalPages={activities?.total_pages ? activities.total_pages : 1}
          onNextPage={handlePageChange}
          onPrevPage={handlePageChange}
        />
      }
      pageTitle="Log Aktivitas"
    />
  );
}
