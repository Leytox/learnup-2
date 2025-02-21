import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

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
  if (isProtectedRoute && !isLoggedIn)
    return NextResponse.redirect(new URL("/login", nextUrl));

  if (isLoggedIn && nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/", nextUrl));

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
