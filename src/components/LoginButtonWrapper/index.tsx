import React from "react";
import { useRouter } from "next/router";

type LoginButtonWrapper = {
  children: React.ReactNode;
};
const LoginButtonWrapper = ({ children }: LoginButtonWrapper) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };
  return <span onClick={handleClick}>{children}</span>;
};

export default LoginButtonWrapper;
