import { getUser } from "../../../lib/db/select";
import ResetPasswordClient from "./resetPasswordClient";

export default async function RessetPasswordPage({ searchParams }) {
    const query = await searchParams;
    const tokenQuery = query.token;
    const email = query.user_email;
    const tokenDb = await prisma.userToken.findFirst({ where: { token: tokenQuery } })

    ///se não for definido, setar erro. Lembrando que findFirst ira mostrar 1 dado se undefined or null.
    if (!tokenQuery || !email || !tokenDb) {
        return <ResetPasswordClient errorMessage={"Email ou Token Inválidos, contate o suporte."} />
    }

    ///verificar validade do token
    const today = new Date()
    const user = await getUser(email)
    if(!user){
        return <ResetPasswordClient errorMessage={"Email ou Token Inválidos, contate o suporte."} />
    }

    if (user.id != tokenDb.userId||
        tokenDb.tokenType != "reset_password"||
        today>tokenDb.tokenExpiry
    ) {
        return <ResetPasswordClient errorMessage={"Token expirado, tente novamente."} />
    }else{
        return <ResetPasswordClient success={true} email={email} tokenId={tokenDb.id}/>
    }

}