import HubGrid from "@/components/area-logada/hub-grid"
import { orcamentosFromDatabase, usersFromDatabase } from "@/lib/db-testes"

export default function OrcamentosArquiteto() {

    const user = usersFromDatabase[0]

    const orcamentos = orcamentosFromDatabase

    return (
        <HubGrid descricao={"Orçamentos"} role={"arquiteto"} referencia={"orcamentos"} itens={orcamentos}  />

)
}