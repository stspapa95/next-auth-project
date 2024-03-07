import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/styles/theme";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
