import { Button } from "@/components/ui/button";
import { formatarDataBR } from "@/lib/utilis/formatDate";
import { userType, Payment } from "@prisma/client";
import Link from "next/link";

export default function PagamentosEmProjeto({ payments, role }: { payments: Payment[], role: userType }) {

    return (
        <div>
            {role === "arquiteto" && <Button variant={"link"} className={"mb-2 border"} size={"lg"} asChild><Link href={`/${role}/financeiro/new-payment`}>Adicionar</Link></Button>}
            <div></div>
            {payments.length === 0 && <p>Nenhuma pagamento registrado.</p>}
            {payments.length > 0 && (<table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Descrição </th>
                        < th > Status </th>
                        < th > Vencimento </th>
                        < th > Valor </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((payment) => (
                            <tr key={payment.id} >
                                <td>{payment.description} </td>
                                < td > {payment.status} </td>
                                < td > {formatarDataBR(payment.dueDate)
                                } </td>
                                < td > R$ {payment.amount.toLocaleString()} </td>
                                {/* Tirei o 'pt-BR' do argumento do localeString */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>)}


        </div>
    )
}