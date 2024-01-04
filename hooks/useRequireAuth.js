import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { asyncPreloadProcess } from "../states/preload/action";

export default function useRequireAuth() {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const preload = useSelector((state) => state.preload);

  useEffect(() => {
    if (!auth) {
      dispatch(asyncPreloadProcess());
      if (!preload && !auth) {
        router.push("/login");
      }
    }
  }, [auth, router, dispatch, preload]);

  return auth;
}
