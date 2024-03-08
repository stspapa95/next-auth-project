import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import CardWrapper from "@/components/CardWrapper";
import LoginForm from "@/components/LoginForm";
import { Registration } from "@/model";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <CardWrapper
        header={"We're A Team That Guides Each Other"}
        showSocial
        backButtonLabel={Registration.LOGIN}
        backButtonHref={"/auth/register"}
      >
        <LoginForm />
      </CardWrapper>
    </DefaultLayout>
  );
};

export default LoginPage;
