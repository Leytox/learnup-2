import React from "react";
import Link from "next/link";
import JoinButton from "./join-button";
import Logo from "@/components/logo";

export default async function LandingHeader() {
  return (
    <header
      className={
        "h-20 z-20 w-full absolute top-0 items-center justify-center flex bg-transparent"
      }
    >
      <div
        className={
          "flex items-center justify-between max-sm:justify-center container h-full px-6 lg:px-8"
        }
      >
        <Link href={"/"} className={"max-sm:hidden"}>
          <Logo />
        </Link>
        <div className="space-x-12">
          <Link href="/blog">Blog</Link>
          <JoinButton />
        </div>
      </div>
    </header>
  );
}
