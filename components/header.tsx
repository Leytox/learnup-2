import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "./ui/button";
import {
  GraduationCapIcon,
  LogOutIcon,
  ShoppingCartIcon,
  User2Icon,
  ShieldUser,
  Presentation,
} from "lucide-react";
import LoginLink from "@/components/login-link";
import Logo from "@/components/logo";
import { Role } from "@/generated/prisma";
import SearchButton from "@/components/search";

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
          "flex items-center justify-between max-sm:justify-center container h-full"
        }
      >
        <Link href={"/"} className={"max-sm:hidden"}>
          <Logo />
        </Link>
        <nav>
          <ul className={"flex gap-4 items-center"}>
            <SearchButton />
            {!session && (
              <li>
                <LoginLink />
              </li>
            )}
            {session && (
              <>
                <li>
                  <ThemeSwitcher />
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
                <li>
                  <Link href={"/profile"}>
                    <Button size={"icon"} variant={"ghost"} title={"Profile"}>
                      <User2Icon />
                    </Button>
                  </Link>
                </li>
                {session.user.role === Role.ADMIN && (
                  <li>
                    <Link href={"/admin"}>
                      <Button
                        size={"icon"}
                        variant={"ghost"}
                        title={"Admin Dashboard"}
                      >
                        <ShieldUser />
                      </Button>
                    </Link>
                  </li>
                )}
                {session.user.role === Role.INSTRUCTOR && (
                  <li>
                    <Link href={"/instructor"}>
                      <Button
                        size={"icon"}
                        variant={"ghost"}
                        title={"Instructor Dashboard"}
                      >
                        <Presentation />
                      </Button>
                    </Link>
                  </li>
                )}
                <li>
                  <Link href={"/logout"}>
                    <Button
                      size={"icon"}
                      variant={"destructive"}
                      title={"Sign Out"}
                    >
                      <LogOutIcon />
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
