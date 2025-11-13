import type { Metadata } from "next";
import { AppKit } from "@/context/appkit";
// import localFont from "next/font/local"


import "./globals.css";



// const customFont = localFont({
//   src: [
//     { path: "./fonts/kapsalon_brush-webfont.woff2", weight: "400", style: "normal" },
//     { path: "./fonts/TRTunamoDEMO-Bold.ttf", weight: "800", style: "bold" },
//     { path: "./fonts/kapsalon_brush-webfont.woff", weight: "400", style: "normal" }, // fallback
//   ],
//   variable: "--font-custom",
//   display: "swap",
// })



export const metadata: Metadata = {
  title: "GOKO - Humanity Peaked, Time to Go Back",
  description: "Join the regression. Embrace the ape. Own the future.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`antialiased overflow-x-hidden`}>
        <AppKit>
          {children}
        </AppKit>
      </body>
    </html>
  );
}
