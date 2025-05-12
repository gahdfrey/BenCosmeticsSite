// import type { AppProps } from "next/app";
// import { Montserrat } from "next/font/google";
// import "@/styles/globals.css";
// import NavBar from "@/Components/Navbar";
// import Footer from "@/Components/Footer";
// import { useEffect } from "react";
// import { initSmoothScroll } from "@/utils/smoothScroll";
// import { ProductsRecord } from "@/lib/types";

// interface CustomPageProps {
//   products?: ProductsRecord[];
// }

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// export default function App({
//   Component,
//   pageProps,
// }: AppProps<CustomPageProps>) {
//   useEffect(() => {
//     initSmoothScroll();
//   }, []);

//   return (
//     <main className={`${montserrat.variable} font-sans`}>
//       <NavBar products={pageProps.products} />
//       <Component {...pageProps} />
//       <Footer />
//     </main>
//   );
// }

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import { initSmoothScroll } from "@/utils/smoothScroll";
import { ProductsRecord } from "@/lib/types";

interface CustomPageProps {
  products?: ProductsRecord[];
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <main>
      <NavBar products={pageProps.products} />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
