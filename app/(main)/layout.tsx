import React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute={"class"} defaultTheme={"dark"} enableSystem>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
}
