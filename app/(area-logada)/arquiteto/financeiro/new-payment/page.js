import { prisma } from "../../../../../lib/db/prisma"
import NewPaymentClient from "./new-payment-client"

export default async function NewPaymentPage() {


    ///selecionar projetos atuais para inscrição
    ///refinar depois.
    const projects = await prisma.project.findMany({
        select: { title: true, id: true }
    })







    return (
        <NewPaymentClient projects={projects} />
    )
}