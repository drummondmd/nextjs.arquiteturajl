//versão cliente

import { ServerSession } from "@/app/redirect/page";
import ProjetosGrid from "@/components/area-logada/projetos/projetos-grid"
import { auth } from "@/lib/auth/auth";
import getProjeto from "@/lib/db/select";
import { NextPage, NextPageContext } from "next";
import { notFound, redirect } from "next/navigation";


export default async function ProjetoSlugPage({ params }:{params:any}) {


    const session = await auth() as ServerSession

    if (!session) {
        redirect("/login")
    }

    const { projetoSlug } = await params;

    ///buscar projeto por slug
    const projeto = await getProjeto(projetoSlug);

    ///página de erro se cliente não for o do projeto.
    if(!projeto || session.user.userId != projeto.clientId ){
        console.log("cliente não autorizado");
        notFound()

    }

    return <ProjetosGrid tipo_usuario={"cliente"} user={null} projeto={projeto} />



}