import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";

const PROTECTED_ROUTES = [
  "/profile",
  "/cart",
  "/learning",
  "/pay",
  "/settings",
  "/course",
  "/lesson",
  "/certificates",
];

export const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    nextUrl.pathname.startsWith(route),
  );
  const authError = nextUrl.searchParams.get("error");
  if (authError && !nextUrl.pathname.startsWith("/error")) {
    const errorUrl = new NextURL("/error", req.url);
    errorUrl.searchParams.set("error", authError);
    return NextResponse.redirect(errorUrl);
  }
  if (isProtectedRoute && !isLoggedIn)
    return NextResponse.redirect(new URL("/login", nextUrl));

  if (isLoggedIn && nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/", nextUrl));

  if (!isLoggedIn && nextUrl.pathname.startsWith("/logout"))
    return NextResponse.redirect(new URL("/", nextUrl));

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
