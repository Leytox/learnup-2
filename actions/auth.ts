"use server";
import { signIn, signOut } from "@/auth";

export async function signInGoogle() {
  return await signIn("google", {
    redirectTo: "/",
    callbackUrl: "/",
    redirect: true,
  });
}

export async function signInGithub() {
  return await signIn("github", {
    redirectTo: "/",
    callbackUrl: "/",
    redirect: true,
  });
}

export async function signOutAll() {
  return await signOut({ redirectTo: "/", redirect: true });
}
