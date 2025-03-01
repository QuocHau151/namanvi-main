import type { Metadata } from "next";

import "./globals.css";
import { Akshar, DM_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Akshar({ subsets: ["latin"] });
const dm_sans = DM_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/img/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/img/favicons/apple-icon-60x60.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/img/favicons/apple-icon-72x72.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/img/favicons/apple-icon-76x76.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/img/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/img/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/img/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/img/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/img/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/img/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/img/favicons/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />

        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />

        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />

        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={`${inter.className} ${dm_sans.className} antialiased`}>
        <Header />
        <div className="mt-[120px] lg:mt-[140px]"> {children}</div>

        <Footer />
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js"></Script>

        <Script src="/assets/js/swiper-bundle.min.js"></Script>

        <Script src="/assets/js/bootstrap.min.js"></Script>

        <Script src="/assets/js/jquery.magnific-popup.min.js"></Script>

        <Script src="/assets/js/jquery.counterup.min.js"></Script>

        <Script src="/assets/js/jquery-ui.min.js"></Script>

        <Script src="/assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="/assets/js/isotope.pkgd.min.js"></Script>

        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
