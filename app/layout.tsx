import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import {Toaster} from 'react-hot-toast'
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ilyass | Personal Portfolio",
  description: "Ilyass is a full-stack developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
      <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5710624763420139"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
      <div className="bg-[#fbe2e3] absolute top-[-6rem]  -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] opacity-40 sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem]  "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem]  -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] opacity-40 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
<ActiveSectionContextProvider>
       <Toaster position="top-right" />
        <Header />
        {children}
        <Footer/>
       </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
