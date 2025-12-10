import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Index";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Cell KGEC | Entrepreneurship & Innovation Cell",
icons: {
  icon: "/ecellkgec.png",
},
description:
  "Welcome to E-Cell KGEC, the Entrepreneurship and Innovation Cell of Kalyani Government Engineering College! We empower students to explore startups, leadership, creativity, and business innovation. Through events, workshops, hackathons, and incubation support, E-Cell KGEC nurtures young minds to turn ideas into impactful ventures. Join a vibrant community where vision meets execution, and innovation meets opportunity.",
keywords: [
  "E-Cell KGEC",
  "Entrepreneurship Cell KGEC",
  "Kalyani Government Engineering College",
  "startup",
  "entrepreneurship",
  "innovation",
  "business",
  "incubation",
  "hackathons",
  "leadership",
  "E-cell",
  "KGEC E-Cell",
],
openGraph: {
  title: "E-Cell KGEC | Entrepreneurship & Innovation Cell",
  description:
    "The official Entrepreneurship Cell of KGEC—empowering innovation, leadership, and startup culture.",
  type: "website",
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
