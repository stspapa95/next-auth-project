import { Button, Text } from "@mantine/core";
import LoginButtonWrapper from "@/components/LoginButtonWrapper";

export default function Home() {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-sky-500 to blue-800"
    >
      <div className={"space-y-3"}>
        <Text c={"#FFF"} size={"xxl"} fw={500} ta={"center"}>
          🔐Auth
        </Text>
        <Text c={"#FFF"} size={"lg"}>
          A simple authentication app
        </Text>

        <div className={"flex justify-center"}>
          <LoginButtonWrapper>
            <Button variant={"filled"} size={"md"} color={"light-blue.5"}>
              Sign in
            </Button>
          </LoginButtonWrapper>
        </div>
      </div>
    </main>
  );
}
