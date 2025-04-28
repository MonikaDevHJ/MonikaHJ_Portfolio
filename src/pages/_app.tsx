import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout"; // adjust if your Layout path is different

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (

    <div className="bg-gray-800 min-h-screen">
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
   
  );
}
