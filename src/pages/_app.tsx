import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import { initSmoothScroll } from "@/utils/smoothScroll";
import { ProductsRecord } from "@/lib/types";

interface CustomPageProps {
  products?: ProductsRecord[];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <main className={`${geistSans.variable} ${geistMono.variable}`}>
      <NavBar products={pageProps.products} />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
