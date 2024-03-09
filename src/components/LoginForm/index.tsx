import React, { useState, useTransition } from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";

import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

import { LoginSchema } from "@/model";

type LoginFormType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const theme = useMantineTheme();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form: UseFormReturnType<LoginFormType> = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(LoginSchema),
  });

  const handleSubmit = (values: LoginFormType) => {
    startTransition(() => {
      console.log(values);
      setShowSuccessMessage(true);
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
      <Stack gap={8}>
        <TextInput
          disabled={isPending}
          leftSection={<MdEmail />}
          label={"Email"}
          placeholder={"example@email.com"}
          {...form.getInputProps("email")}
        />
        <TextInput
          disabled={isPending}
          leftSection={<MdAlternateEmail />}
          label={"Password"}
          placeholder={"********"}
          {...form.getInputProps("password")}
        />

        {showSuccessMessage && (
          <Card
            withBorder
            padding={"sm"}
            radius={"sm"}
            mt={8}
            bg={"success.1"}
            style={{ border: "none" }}
            shadow={"none"}
          >
            <Group gap={8}>
              <FaRegCheckCircle style={{ color: theme.colors.success[9] }} />
              <Text size={"sm"} c={"success.9"}>
                Login successfully!
              </Text>
            </Group>
          </Card>
        )}

        <Button
          mt={8}
          disabled={isPending}
          type={"submit"}
          variant={"filled"}
          color={"secondary.9"}
          size={"md"}
        >
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
