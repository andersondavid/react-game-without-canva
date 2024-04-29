import { BulletContextProvider } from "@/api/bulletContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BulletContextProvider>
      <Component {...pageProps} />
    </BulletContextProvider>
  );
}
