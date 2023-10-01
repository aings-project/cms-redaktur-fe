import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/main/MainLayout";
import { convertStatus } from "../../utils/draftAttributeParser";
import ActivitiesLayout from "../../components/activities/ActivitiesLayout";

export default function Activities() {
  const dispatch = useDispatch();

  return (
    <MainLayout
      activePage="activities"
      content={<ActivitiesLayout />}
      pageTitle="Log Aktivitas"
    />
  );
}
