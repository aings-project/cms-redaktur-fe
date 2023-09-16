import React from "react";
import LoginLayout from "../../components/login/LoginLayout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../../states/auth/action";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogin = ({ email, password }) => {
    dispatch(
      asyncSetAuthUser({
        email,
        password,
        onSuccess: () => {
          router.push("/");
        },
      })
    );
  };

  return <LoginLayout login={onLogin} />;
}
