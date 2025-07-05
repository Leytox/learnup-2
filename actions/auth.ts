"use server";
import { signIn, signOut } from "@/auth";
import { createUser } from "@/actions/user";

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
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      switch (result.error) {
        case "CredentialsSignin":
          throw new Error("Invalid email or password");
        case "OAuthAccountNotLinked":
          throw new Error("Account already exists with different provider");
        case "EmailSignin":
          throw new Error("Email sign-in failed");
        case "Callback":
          throw new Error("Authentication callback failed");
        case "OAuthSignin":
          throw new Error("OAuth sign-in failed");
        case "OAuthCallback":
          throw new Error("OAuth callback failed");
        case "OAuthCreateAccount":
          throw new Error("OAuth account creation failed");
        case "EmailCreateAccount":
          throw new Error("Email account creation failed");
        case "SessionRequired":
          throw new Error("Session required");
        case "Default":
          throw new Error("Authentication failed");
        default:
          throw new Error(result.error);
      }
    }

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
