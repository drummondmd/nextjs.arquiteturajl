import HubGrid from "@/components/area-logada/hub-grid";
import { projetosFromDatabase, users, usersFromDatabase } from "@/lib/db-testes";

export default function ProjetoArquiteto() {

    ////busar usuario da sessão,usando o primeiro para teste
    const user = usersFromDatabase[0]

    ///buscar projetos do usuario
    const projetos  =  projetosFromDatabase

    return (
        <HubGrid role={"arquiteto"} referencia={"projetos"} user={user} descricao={"Projetos"} fotos={null} itens={projetos} />
    )
}