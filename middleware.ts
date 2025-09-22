// src/middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  // Tenta pegar o token JWT da session
  const token = await getToken({ req });

  // Se não tem token → redireciona pro login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Se existe mas não é arquiteto → redireciona pra unauthorized
  if (token.userType !== "arquiteto") {
    return NextResponse.redirect(new URL("/cliente", req.url));
  }

  // Caso contrário, segue
  return NextResponse.next();
}

export const config = {
  matcher: ["/arquiteto", "/arquiteto/:path*"],
};
