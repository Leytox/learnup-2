import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import SignOut from "@/components/signOut";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "./ui/button";
import { GraduationCapIcon, ShoppingCartIcon, User2Icon } from "lucide-react";
import LoginLink from "@/components/login-link";
import Logo from "@/components/logo";

export default async function Header() {
  const session = await auth();
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
        <nav>
          <ul className={"flex gap-6 items-center"}>
            {!session && (
              <li>
                <LoginLink />
              </li>
            )}
            {session && (
              <>
                <li>
                  <Link href={"/profile"}>
                    <Button size={"icon"} variant={"ghost"} title={"Profile"}>
                      <User2Icon />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/learning"}>
                    <Button
                      size={"icon"}
                      variant={"ghost"}
                      title={"My Courses"}
                    >
                      <GraduationCapIcon />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/cart"}>
                    <Button size={"icon"} variant={"ghost"} title={"Cart"}>
                      <ShoppingCartIcon />
                    </Button>
                  </Link>
                </li>
              </>
            )}
            {session && (
              <li>
                <SignOut />
              </li>
            )}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
