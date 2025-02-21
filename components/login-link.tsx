"use client";

import Link from "next/link";
import React from "react";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function LoginLink() {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return (
    <Link href={"/login"}>
      <Button size={"icon"}>
        <LogInIcon />
      </Button>
    </Link>
  );
}
