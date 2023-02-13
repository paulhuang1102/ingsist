import type { AppContext, AppProps } from "next/app";
import type { GetServerSideProps } from "next"
import { InterFont } from "@/styles/font";
import "@/styles/globals.css";
import Modal from "react-modal";
import { getTags } from "@/utils/firebase";
import CookiesToast from "@/components/AllowCookies";

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${InterFont.style.fontFamily};
        }
      `}</style>

      <div>
        <Component {...pageProps} />
        <CookiesToast />
      </div>
    </>
  );
}