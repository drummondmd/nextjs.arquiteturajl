import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = {
    providers: [CredentialsProvider({
        name: "Credenciais",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Seu nome" },
            password: { label: "Password", type: "password" }
        },
         async authorize (credentials,req) {
            console.log("logar")
         }

    })


    ]
}

const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST }



