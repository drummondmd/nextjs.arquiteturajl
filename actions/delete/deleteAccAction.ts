'use server'

import { prisma } from "@/lib/db/prisma"
import { UserWithProfile } from "@/lib/db/select"
import { redirect } from "next/navigation"

export default async function deleteUserAcc(user:UserWithProfile){
    if(!user) return {success:false, message:"Usuario não definido."}
try {
    await prisma.user.delete({
        where:{id:user.id}
    })
} catch (error) {
    console.error(error,"Erro ao deletar conta")
    return {success:false, message:"Erro ao deletar conta na database."}
}
redirect("/")
}