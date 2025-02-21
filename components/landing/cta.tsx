import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronsDownIcon } from "lucide-react";
import Stars from "./stars";
import Link from "next/link";
import JoinButton from "./join-button";

export default function Cta() {
  return (
    <section
      id="cta"
      className={"flex relative items-center justify-center min-h-screen"}
    >
      <div
        className={
          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] rounded-full bg-green-300 blur-3xl opacity-10"
        }
      />
      <Stars />
      <div className={"container z-10"}>
        <div className={"flex flex-col items-center"}>
          <h1
            className={
              "text-7xl bg-gradient-to-b from-white via-gray-200 to-gray-400 text-center bg-clip-text text-transparent font-semibold tracking-tight"
            }
          >
            Unleash power of mind
            <br /> with Learn
            <span
              className={
                "bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent"
              }
            >
              Up
            </span>
          </h1>

          <p className={"mt-8 text-gray-400 font-semibold text-center"}>
            Say goodbye to old-style learning with boring teachers and home
            assignments. Embrace a new era of interactive and engaging
            education.
          </p>
          <JoinButton />
        </div>
      </div>
      <div className={"absolute bottom-16 flex flex-col items-center"}>
        <p className={"mt-16 mb-2"}>Check more</p>
        <div className={"animate-bounce"}>
          <ChevronsDownIcon />
        </div>
      </div>
    </section>
  );
}
