import React from "react";
import Link from "next/link";
import { Box, Button, Card, Group, Stack, Text } from "@mantine/core";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Registration } from "@/model";

type CardWrapperProps = {
  children: React.ReactNode;
  header: string;
  showSocial?: boolean;
  backButtonLabel: string;
  backButtonHref: string;
};

const CardWrapper = ({
  children,
  header,
  showSocial = false,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card shadow={"xs"} padding={"lg"} radius={"lg"} withBorder w={400}>
      <Stack justify={"center"} align={"center"} gap={"md"}>
        <Text size={"xxl"} fw={500}>
          🔐Auth
        </Text>
        <Text size={"md"} c={"secondary.4"}>
          {header}
        </Text>

        {children}

        {showSocial && (
          <Stack w={"100%"} gap={"md"} mt={16}>
            <Button
              fullWidth
              leftSection={<FcGoogle size={20} />}
              justify={"center"}
              size={"md"}
              variant={"default"}
            >
              Sign in with Google
            </Button>

            <Button
              fullWidth
              size={"md"}
              variant={"default"}
              leftSection={<FaGithub size={20} />}
            >
              Sign in with Github
            </Button>
          </Stack>
        )}

        <Box mt={16}>
          <Group gap={4}>
            <Text size={"sm"}>{backButtonLabel}</Text>
            <Link href={backButtonHref}>
              <Text
                size={"sm"}
                fw={"bold"}
                style={{
                  cursor: "pointer",
                }}
              >
                {backButtonLabel === Registration.LOGIN ? "Sign up" : "Sign in"}
              </Text>
            </Link>
          </Group>
        </Box>
      </Stack>
    </Card>
  );
};

export default CardWrapper;
