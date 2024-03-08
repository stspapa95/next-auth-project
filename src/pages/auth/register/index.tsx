import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import CardWrapper from "@/components/CardWrapper";

import RegisterForm from "@/components/RegisterForm";
import { Registration } from "@/model";

const RegisterPage = () => {
  return (
    <DefaultLayout>
      <CardWrapper
        header={"Create an account"}
        backButtonLabel={Registration.SIGN_UP}
        backButtonHref={"/auth/login"}
      >
        <RegisterForm />
      </CardWrapper>
    </DefaultLayout>
  );
};

export default RegisterPage;
