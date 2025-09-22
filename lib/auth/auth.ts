import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/db/prisma"
import { checkPassword } from "@/lib/hash/hash"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authOptions = {
    providers: [CredentialsProvider({
        name: "Credenciais",
        credentials: {
            username: { label: "Email", type: "text", placeholder: "email cadastrado" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            try {
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.username },
                    include: { profile: true }
                })
                const isPasswordMatched = await checkPassword(credentials?.password, user?.passwordHash)
                if (!user || !isPasswordMatched) {
                    return null
                } else {
                    return { userId:user.id, userType: user.userType, email: user.email, firstName: user.profile?.firstName, lastName: user.profile?.lastName }
                }

            } catch (error) {
                console.error("Erro ao autorizar login")
                return null;

            }

        }




    })],
    callbacks: {
        async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
            console.log(url, baseUrl)
            return baseUrl + "/redirect"
        },
        async jwt({ token, user }) {
            if (user) {
                token.userId = user.userId
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.userType = user.userType;
            }
            return token
        },
        async session({session,token}){
            if(token){
                session.user.firstName = token.firstName
                session.user.lastName = token.lastName
                session.user.userType = token.userType
                session.user.userId = token.userId
                delete session.user.name;
            }

            return session
        }


    }
}


// Use it in server contexts
export function auth(
    ...args:
        | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, authOptions)
}