import Link from "next/link"

export default async function ProjetoSlugPage({ params }) {
    const { orcamentoSlug } = await params

    return (
        <>
            <p>Orçamento em especifico: {orcamentoSlug}</p>
            <Link href={"/cliente/orcamentos"}>Voltar</Link>

        </>


    )
}