import { cn } from "@/lib/utils";
import React from "react";
import GithubAuth from "@/components/githubAuth";
import GoogleAuth from "@/components/googleAuth";
import Link from "next/link";
import { CredentialsAuth } from "./credentialsAuth";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p>Select one of the auth methods</p>
          </div>
          <CredentialsAuth />
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/registration" className="underline">
              Register
            </Link>
          </p>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GithubAuth />
            <GoogleAuth />
          </div>
        </div>
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}
