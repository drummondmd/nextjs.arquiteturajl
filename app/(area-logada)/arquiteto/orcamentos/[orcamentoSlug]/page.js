import { usersFromDatabase } from "@/lib/db-testes";

export default async function OrcamentoSlugArquiteto({params}){
    const user = usersFromDatabase[0]
    const {orcamentoSlug} = await params

    console.log(orcamentoSlug)

    return(
        <p>Orçamento do {orcamentoSlug}</p>
    )
}