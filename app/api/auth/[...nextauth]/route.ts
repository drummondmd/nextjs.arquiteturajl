import { authOptions } from "@/lib/auth/auth"
import { prisma } from "@/lib/db/prisma"
import { checkPassword } from "@/lib/hash/hash"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }



