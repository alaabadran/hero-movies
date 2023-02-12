import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
