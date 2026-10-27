
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abena Fosua Frimpong | Backend Software Engineer",
    template: "%s | Abena Fosua Frimpong",
  },
  description:
    "Explore the portfolio, software projects, technical skills, and experience of Abena Fosua Frimpong, a Backend Software Engineer.",
  keywords: [
    "Abena Fosua Frimpong",
    "Backend Software Engineer",
    "Python",
    "Django",
    "REST APIs",
    "Software Development",
  ],
  openGraph: {
    title: "Abena Fosua Frimpong | Backend Software Engineer",
    description:
      "Explore my software projects, technical skills, and engineering journey.",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
