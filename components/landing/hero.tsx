import React from "react";
import { ChevronsDownIcon } from "lucide-react";
import Stars from "../stars";
import { Button } from "../ui/button";
import Link from "next/link";
import Aurora from "../aurora";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={"flex relative items-center justify-center min-h-screen"}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Aurora
          amplitude={1 / 3}
          colorStops={["#01A63E", "#01C59E", "#00E3FD"]}
        />
      </div>
      <Stars />
      <div className={"container z-10"}>
        <div className={"flex flex-col items-center"}>
          <h1
            className={
              "text-8xl max-md:text-6xl max-sm:text-5xl bg-gradient-to-b from-white via-gray-200 to-gray-400 text-center bg-clip-text text-transparent font-semibold tracking-tight"
            }
          >
            Unleash power of mind
            <br /> with{" "}
            <span
              className={
                "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent tracking-normal font-semibold"
              }
            >
              Learn
              <span
                className={
                  "bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-green-400 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent"
                }
              >
                Up
              </span>
            </span>
          </h1>

          <p
            className={
              "mt-8 text-gray-200 text-center font-semibold text-2xl max-md:text-xl max-sm:text-lg"
            }
          >
            Say goodbye to old-style learning with boring teachers and home
            assignments.
          </p>
          <Link href="/login" className={"mt-4"}>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="mt-4 border-b-2 border-green-700 w-60 h-12 text-lg duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-700/50 hover:cursor-pointer"
            >
              Join to students
            </Button>
          </Link>
        </div>
      </div>
      <a
        href="#moving-text"
        className={
          "absolute bottom-16 flex flex-col items-center duration-300 hover:translate-y-1"
        }
      >
        <div className={"animate-bounce"}>
          <ChevronsDownIcon size={32} />
        </div>
      </a>
    </section>
  );
}
