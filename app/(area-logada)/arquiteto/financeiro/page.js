import FinanceiroTable from "@/components/area-logada/arquiteto/fincanceiro/financeiro-table";
import { prisma } from "@/lib/db/prisma";
import normalizePrismaData from "@/lib/utilis/normalize-prisma";

export default async function FinanceiroPage() {

    const financeiroRaw = await prisma.payment.findMany({
        include: {
            project: {
                select: {
                    title: true,
                    slug: true,
                }
            }
        },
    })

    const financeiro = normalizePrismaData(financeiroRaw)

    const entradas = financeiro.filter(item => item.paymentType === 'entrada')
    const saidas = financeiro.filter(item => item.paymentType === 'saida')

    return (<div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0 text-capitalize">Financeiro</h4>
            <button className="btn btn-success btn-sm">
                <i className="bi bi-plus-lg me-1"></i>Inserir novo
            </button>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <FinanceiroTable tipo={'Entradas'} array={entradas} />
            </div>
            <div className="col-lg-6">
                <FinanceiroTable tipo={'Saídas'} array={saidas} />
            </div>

        </div>

    </div>

    );
}
