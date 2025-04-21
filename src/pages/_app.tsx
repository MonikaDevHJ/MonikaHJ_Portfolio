import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Only animate once
    });
  }, []);

  return <Component {...pageProps} />;
}
