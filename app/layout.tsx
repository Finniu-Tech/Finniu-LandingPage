import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import NavComponent from "./components/Navbar/NavComponent";
import NavBar from "@/app/(new-landing)/Navbar/Navbar"
// import FooterPageComponent from "./components/Footer/FooterPageComponent";
import Footer from "@/app/(new-landing)/Footer/Footer"
import FloatingWhatsappButton from "./components/Button-wsp/FloatingWhatsappButtonComponent";
import GTM from "./components/GTM";
import Popup from "./components/Popup/Popup";
import FlyonuiScript from "@/app/(new-landing)/scripts/FlyonuiScript"

const DMSans = localFont({
  src: [
    {
      path: "../public/fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Finniu - Simplificamos tu presente, potenciamos tu futuro",
  description:
    "Con Finniu simplificamos tu presente, potenciamos tu futuro.",
  openGraph: {
    title: "Finniu - Simplificamos tu presente, potenciamos tu futuro",
    description:
      "Con Finniu simplificamos tu presente, potenciamos tu futuro.",
    url: "https://www.finniu.com",
    siteName: "Finniu",
    images: [
      {
        url: "https://finniu-statics.s3.amazonaws.com/finniu/images/finniu-seo.png",
        width: 1200,
        height: 630,
        alt: "Finniu - Simplificamos tu presente, potenciamos tu futuro",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finniu - Simplificamos tu presente, potenciamos tu futuro",
    description:
      "Con Finniu simplificamos tu presente, potenciamos tu futuro.",
    images: [
      "https://finniu-statics.s3.amazonaws.com/finniu/images/finniu-seo.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

        <html lang="en">
          <head>
            <GTM />
          </head>
          <body className={DMSans.className}>
            {/* <NavComponent /> */}
            <NavBar />
            {children}
            {/*<Popup />*/}
            <FloatingWhatsappButton />
            {/* <FooterPageComponent /> */}
            <Footer />
          </body>
          <FlyonuiScript />
        </html>

  );
}