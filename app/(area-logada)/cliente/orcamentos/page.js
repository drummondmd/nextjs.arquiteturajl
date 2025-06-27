import HubGrid from "@/components/area-logada/hub-grid"
import { orcamentosFromDatabase, usersFromDatabase } from "@/lib/db-testes"

export default function OrcamentoCliente() {

    //
    const user = usersFromDatabase[0]



    ///
    const orcamentos = orcamentosFromDatabase.filter((elem)=> elem.cliente_id === user.id )

    return (
        <HubGrid role={"cliente"} referencia={"orcamentos"} user={user} descricao={"Orçamentos"} fotos={null} itens={orcamentos} />
    )
}