"use server";
import { signIn, signOut } from "@/auth";
import { createUser } from "@/lib/user";

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

export async function signInCredentials(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return { success: true };
  } catch (error) {
    throw error;
  }
}

export async function signUp(email: string, name: string, password: string) {
  try {
    await createUser(email, name, password);
    return { success: true };
  } catch (error) {
    throw error;
  }
}

export async function signOutAll() {
  return await signOut({ redirectTo: "/", redirect: true });
}
