import { BulletContextProvider } from "@/api/bulletContext";
import { ControlsContextProvider } from "@/api/controlsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BulletContextProvider>
      <ControlsContextProvider>
        <Component {...pageProps} />
      </ControlsContextProvider>
    </BulletContextProvider>
  );
}
