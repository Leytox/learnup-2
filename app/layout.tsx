import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import GoTop from "@/components/go-top";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import CookiesAlert from "@/components/cookies-alert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnUp",
  description: "Comprehensive learning platform",
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
        <ThemeProvider attribute={"class"} defaultTheme={"dark"} enableSystem>
          {children}
          <GoTop />
          <Footer />
          <CookiesAlert />
        </ThemeProvider>
      </body>
    </html>
  );
}
