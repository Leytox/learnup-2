import React from "react";
import Logo from "@/components/logo";
import { SiFacebook, SiX, SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className={
        "h-fit w-full flex flex-col items-center justify-center bg-gray-900 text-white"
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
            <a
              href="https://x.com"
              target="_blank"
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <SiX />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <SiFacebook />
            </a>

            <a
              href="https://github.com/Leytox/learnup-2"
              target="_blank"
              className={
                "size-10 rounded-full bg-black flex justify-center items-center duration-200 hover:bg-gray-900"
              }
            >
              <SiGithub />
            </a>
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
