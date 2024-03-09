import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import CardWrapper from "@/components/CardWrapper";

import RegisterForm from "@/components/RegisterForm";
import { Authentication } from "@/model";

const RegisterPage = () => {
  return (
    <DefaultLayout>
      <CardWrapper
        header={"Create an account"}
        backButtonLabel={Authentication.SIGN_UP}
        backButtonHref={"/auth/login"}
      >
        <RegisterForm />
      </CardWrapper>
    </DefaultLayout>
  );
};

export default RegisterPage;
