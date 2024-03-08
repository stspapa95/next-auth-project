import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import CardWrapper from "@/components/CardWrapper";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <CardWrapper header={"We're A Team That Guides Each Other"} showSocial>
        This is a login page.
      </CardWrapper>
    </DefaultLayout>
  );
};

export default LoginPage;
