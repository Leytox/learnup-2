import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "../ui/button";

export default async function LandingHeader() {
  return (
    <header
      className={
        "h-20 z-20 w-full absolute top-0 items-center justify-center flex bg-white/5 backdrop-blur-md"
      }
    >
      <div
        className={
          "flex items-center justify-between max-sm:justify-center container h-full px-6 lg:px-0"
        }
      >
        <Link href={"/"} className={"max-sm:hidden"}>
          <Logo />
        </Link>
        <div className="space-x-12">
          <Link
            href="/blog"
            className="font-semibold duration-200 hover:translate-y-1"
          >
            Blog
          </Link>
          <Link href="/login" className={"mt-4"}>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="mt-4 border-b-2 border-green-700 font-semibold duration-200 hover:-translate-y-1"
            >
              Join to students
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
