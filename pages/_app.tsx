import type { AppProps } from "next/app";
import { InterFont } from "@/styles/font";
import "@/styles/globals.css";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${InterFont.style.fontFamily};
        }
      `}</style>
    
      <Component {...pageProps} />
    </>
  );
}
