import React from "react";
import LoginLayout from "../../components/login/LoginLayout";

export default function Login() {
  const router = useRouter();

  return <LoginLayout onLogin={() => router.push("/overview")} />;
}
