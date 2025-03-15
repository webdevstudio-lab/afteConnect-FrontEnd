import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/cpanel",
  "/home",
  "/activation",
  "/users",
  "/users/new",
];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const accessToken = req.cookies.get("_Afteconnet_Token")?.value;

  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && accessToken) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  return NextResponse.next();
}
