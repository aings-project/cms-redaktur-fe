import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "../states/preload/action";
import OnboardingLayout from "../components/main/OnboardingLayout";

export default function Home() {
  const auth = useSelector((state) => state.auth);
  const preload = useSelector((state) => state.preload);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (preload) {
    return <OnboardingLayout />;
  }
  if (auth) {
    router.push("/overview");
  } else {
    router.push("/login");
  }

  return <OnboardingLayout />;
}
