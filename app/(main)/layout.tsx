import React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute={"class"} defaultTheme={"dark"} enableSystem>
        <Header />
        <div className="mt-20 min-h-screen">{children}</div>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
