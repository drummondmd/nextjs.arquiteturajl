import { prisma } from "../../../../../lib/db/prisma";
import NovoOrcamentoClient from "./novo-orcamento-client";

export default async function NovoOrcamentoPage() {

    const users = await prisma.user.findMany({
        select: {
            id: true,
            profile: { select: { firstName: true, lastName: true } }
        }
    })


    return <NovoOrcamentoClient users={users || []} />
    console.log(users)


    const referenceObj =
    {
        id: '939c8592-d2ed-429e-9d22-0c406d1c2894',
        clientId: '40155cf1-fbad-47cf-9b87-74fdeab134cd',
        totalValue: 72000,
        status: 'enviado',
        version: 2,
        sentAt: "2025-06 - 28T00:00:00.000Z",
        acceptedAt: "2025-07-02T00:00:00.000Z",
        paymentTerms: '100% na entrega',
        summary: 'Reforma de fachada comercial',
        notes: '',
        fileUrl: 'https://example.com/orcamento2.pdf',
        title: 'Fachada Centro Comercial'
    }

}
