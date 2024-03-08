import { Button, Text } from "@mantine/core";
import LoginButtonWrapper from "@/components/LoginButtonWrapper";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={"space-y-3"}>
        <Text c={"#FFF"} size={"xxl"} fw={500} ta={"center"}>
          🔐Auth
        </Text>
        <Text c={"#FFF"} size={"lg"}>
          A simple authentication app
        </Text>

        <div className={"flex justify-center"}>
          <LoginButtonWrapper>
            <Button variant={"filled"} size={"md"} color={"primary.5"}>
              Sign in
            </Button>
          </LoginButtonWrapper>
        </div>
      </div>
    </DefaultLayout>
  );
}
