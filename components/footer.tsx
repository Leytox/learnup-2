import React from "react";
import Logo from "@/components/logo";
import { FacebookIcon, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

// TODO: Fix mobile layout
function Footer() {
  return (
    <footer
      className={
        "h-fit w-full flex flex-col items-center justify-center bg-gray-800 text-white"
      }
    >
      <div
        className={
          "flex justify-center items-center max-md:flex-col gap-6 container py-16 w-full"
        }
      >
        <div
          className={
            "flex flex-col max-md:items-center items-start justify-center gap-2 max-md:w-full"
          }
        >
          <Logo />
          <div className={"flex gap-4"}>
            <div
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <TwitterIcon />
            </div>

            <div
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <FacebookIcon />
            </div>

            <div
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <GithubIcon />
            </div>
          </div>
        </div>
        <div className={"flex w-full justify-evenly"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"text-xl font-semibold"}>Get Help</h1>
            <ul className={"flex flex-col gap-2"}>
              <li>
                <Link href={"/terms"}>Terms of Usage</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/faq"}>F.A.Q.</Link>
              </li>
            </ul>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"text-xl font-semibold"}>Quick Links</h1>
            <ul className={"flex flex-col gap-2"}>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"bg-black flex items-center justify-center py-2 w-full"}>
        &copy; {new Date().getFullYear()} LearnUp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
