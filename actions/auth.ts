"use server";
import { signIn, signOut } from "@/auth";

export async function signInGoogle() {
  return await signIn("google", { redirectTo: "/" });
}

export async function signInGithub() {
  return await signIn("github", { redirectTo: "/" });
}

export async function signOutAll() {
  return await signOut({ redirectTo: "/" });
}
