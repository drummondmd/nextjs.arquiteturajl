import NewPaymentForm from "../../../../../components/adicionar-projeto/payments/new-payment-form"
import { prisma } from "../../../../../lib/db/prisma"

export default async function NewPaymentPage() {


    ///selecionar projetos atuais para inscrição
    ///refinar depois.
    const projects = await prisma.project.findMany({
        select: { title: true, id: true }
    })







    return (
        <NewPaymentForm projects={projects} />
    )
}